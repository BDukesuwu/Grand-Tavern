// http://localhost:3001/api/users
import {getToken} from "./users-service";

// http://localhost:3001/api/items
const BASE_URL = '/api/items';

//get all items
export async function getAll() {
    return sendRequest(BASE_URL); //get method
}

//return a single item
export async function getById(credentials) {
    return sendRequest(`${BASE_URL}/${id}`);
}

//return a single item
export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}

async function sendRequest(url, method = 'GET', payload = null) {
    const options = {method};
    // if you want to send data to the server
    if (payload) {
        // we must send JSON
        options.headers = {
            'Content-Type': 'application/json'
        };
        // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }

    // tell fetch function to send data to URL with some data
    // if there is any data
    // this depends on HTTP methods such as GET OR POST
    const res = await fetch(url, options);
    // HTTP status code 200, means everything went fine
    if (res.ok) return res.json();
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
    throw new Error('Bad Request');
}

export function checkToken() {
    // http://localhost:3001/api/users/check-token
    return sendRequest(`${BASE_URL}/check-token`);
}