import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let display;
    if (loggedInUser) {
        display = <li className={(isSticky || isCollapsed) ? "nav-item text-primary  pt-2" : "nav-item text-primary  pt-2"}>
            {loggedInUser.name}
        </li>
    }

    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])






    return (
        <nav className={(isSticky || isCollapsed) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light  text-dark"}>
            <div class="container-fluid">
                <div className="col-md-6 px-3">
                    <a className="navbar-brand text-danger" href="#home"><span className="h3">Retro Tech Blogs</span></a>
                </div>
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)}
                    id="nav-toggle-button"
                    class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 h3 px-3">

                        {display}

                        <li class="nav-item px-3">
                            <a class="nav-link text-light" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link text-light" href="#blog">Blogs</a>
                        </li>
                        {isAdmin &&
                            <li class="nav-item px-2">
                                <Link style={{ textDecoration: 'none' }} class="nav-link text-light" to="/addBlogs">Admin</Link>
                            </li>
                        }
                        <li class="nav-item px-2">
                            <a class="nav-link text-light" href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;