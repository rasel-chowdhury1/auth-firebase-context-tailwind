import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user,logout} = useContext(AuthContext);

    const handleLogout = () =>{
        logout()
        .then(result =>{
            console.log("successfull logout")
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost normal-case text-xl">Auth Master</button>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/Orders'>Orders</Link>
            {user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {
                user
                ? <>
                <p>{user.email}</p>
                <Link onClick={handleLogout} className="btn btn-primary">Logout</Link>
                </>
                :<><Link to='/login' className="btn btn-primary">Login</Link></>
            }
           </div>
        </div>
    );
};

export default Header;