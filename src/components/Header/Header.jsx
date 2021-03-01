import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/my-posts">My Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className={ `${styles.btn} btn btn-sm btn-outline-secondary` } activeClassName="" to="/login">Sign up</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;