import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import MenuPage from '../MenuPage/MenuPage';
import AboutPage from '../AboutPage/AboutPage';
import BookingPage from '../BookingPage/BookingPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

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
                        <Route path="/book" element={<BookingPage/>}/>
                        <Route path="/orders" element={<OrderHistoryPage/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}

        </main>
    );
}

export default App;