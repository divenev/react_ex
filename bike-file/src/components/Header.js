import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


export const Header = () => {

    let { user } = useContext(UserContext)

    return (
        <header>
            <Link to="/" className="Home" ><b>BikeFile</b></Link>

            {user && user.hasOwnProperty('email') && <p>Welcome, {user.email}</p>}

            <nav>
                <Link to="/check">Check a bike</Link>
                {(!user || Object.keys(user).length < 1) && <>
                    <Link to="/users/login">Login</Link>
                    <Link to="/users/register">Register</Link>
                </>}

                {user && user.hasOwnProperty('email') &&
                    <Link to="users/logout">Logout</Link>
                }
            </nav>
        </header>
    )
}