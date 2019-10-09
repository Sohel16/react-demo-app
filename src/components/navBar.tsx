import * as React from 'react';
import { NavLink } from 'react-router-dom';




const Navbar: React.FC<any> = () => {
    return(
            <nav className="navbar">
                <div className="app-name-header">
                    <a className="app-brand" href="#">Todo App</a>
                </div>
                <ul className="navbar-ul">
                    <li><NavLink className="link" activeClassName="is-active" to="/post">POST</NavLink></li>
                    <li><NavLink className="link" activeClassName="is-active" to="/user">USER</NavLink></li>
                    <li><NavLink className="link" activeClassName="is-active" to="/register">REGISTER</NavLink></li>
                    <li><NavLink className="link" activeClassName="is-active" to="/login">LOGIN</NavLink></li>
                </ul>
            </nav>
    )
}

export default Navbar;
