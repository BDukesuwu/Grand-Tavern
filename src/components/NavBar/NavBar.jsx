import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
// setting up the nav bar links and their routes
    return (
        <nav>
            <span>Welcome, {user.name}</span>
            <Link to="/">HomePage</Link>
            &nbsp; | &nbsp;
            <Link to="/menu">Menu</Link>
            &nbsp; | &nbsp;
            <Link to="/about">Our Story</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">Order Page</Link>
            &nbsp; | &nbsp;
            <Link to="/book">Book a Table</Link>
            &nbsp; | &nbsp;
            &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
        </nav>
    )
}
