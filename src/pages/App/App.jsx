import './App.css';
import {useEffect, useState} from 'react';

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
    const [user, setUser] = useState(getUser()); // get user

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/menu" element={<MenuPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
                        <Route path="/book" element={<HomePage />}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}

        </main>
    );
}

export default App;