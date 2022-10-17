import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { HashLink } from 'react-router-hash-link';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
// setting up the nav bar links and their routes
    return (
        <nav justify variant="tabs" >
            <span>Welcome, {user.name}</span>
                &nbsp; | &nbsp;
            <Link to="/menu">Menu</Link>
                &nbsp; | &nbsp;
            <Link to="/about">Our Story</Link>
                &nbsp; | &nbsp;
            <Link to="/orders/new">Order Page</Link>
                &nbsp; | &nbsp;
            <HashLink smooth to="/#booking">Book a Table</HashLink>
                &nbsp; | &nbsp;
            <button onClick={handleLogOut} type="button" className="btn btn-dark">Logout</button>
        </nav>
    )
}
