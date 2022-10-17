import './App.css';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import MenuPage from '../MenuPage/MenuPage';
import AboutPage from '../AboutPage/AboutPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    const rootAPIURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=steak&app_id=d64967dc&app_key=a5f9f1786ee37fd224fadf684361a6d3'
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser()); // get user
    const [recipe, setRecipes] = useState(null); //by default there will be null recipes

    const fetchData = async () => {
        fetch(rootAPIURL) //fetch api
        .then(response => response.json()) //turn it into json
        .then(data => console.log(data.hits)) //store the data hits/menu items
        .catch(error => console.log('something went wrong', error))
        .finally(console.log('runs no matter what'))
    };

    useEffect(() => {
        fetchData();
    }, []); //to render only once

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/menu" element={<MenuPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/orders/new" element={<NewOrderPage/>}/>
                        <Route path="/book" element={<HomePage />}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}

        </main>
    );
}

export default App;