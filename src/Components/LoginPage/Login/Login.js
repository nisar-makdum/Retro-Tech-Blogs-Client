import React, { useContext, useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginForm';

import './Login.css'

import { UserContext } from '../../../App';
import Navbar from '../../HomePage/Navbar/Navbar';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    });
    initializeLoginFramework();


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();

    }
    return (
        <div className="logIn login-bg ">
            <Navbar></Navbar>
            <div className="text-center pt-5 text-light">
                <div>
                    <h1 className="text-light px-5 mx-5">Welcome To <span className="text-danger">Retro Tech Blogs</span></h1>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center ">
                            <div id="booking-area" className="booking-form login-card-bg">
                                {/* <h1>Retro Tech Blogs</h1> */}
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group text-light">
                                        {newUser && <h4>Name</h4>}
                                        {newUser && <input name="name" className="text-light" type="text" onBlur={handleBlur} placeholder="Your name" />}
                                    </div>
                                    <div className="input-group">
                                        <label for=""><h4>Email</h4></label>
                                        <input className="text-light" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" data-bs-toggle="popover" title="Enter A Valid Email Address" required />
                                    </div>
                                    <div className="input-group">
                                        <label for=""><h4>Password</h4></label>
                                        <input className="text-light" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" data-bs-toggle="popover" title="Password length must be greater than 6 and must have at least One Number " required />
                                    </div>
                                    <div className="d-grid">
                                        <input className="btn-lg  btn-block btn-secondary" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                                    </div>
                                    <div >
                                        {/* <h5>New Here??? Become One Of Us <a className="text-danger" onClick={() => setNewUser(!newUser)} href="#">{newUser ? 'Sign In' : 'Sign Up'}</a> */}

                                        {newUser ?
                                            <h5>Signed Up Already??? Ok Then <a className="text-danger" onClick={() => setNewUser(!newUser)} href="#">Sign In</a></h5>
                                            :
                                            <h5>New Here??? Become One Of Us <a className="text-danger" onClick={() => setNewUser(!newUser)} href="#">Sign Up</a></h5>}
                                    </div>
                                </form>

                                <p style={{ color: 'red' }}>{user.error}</p>
                                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                            </div>
                        </div>
                        {/* <div className="d-flex justify-content-center pt-5">
                            <button style={{ width: "380px" }} onClick={googleSignIn} className="btn btn-secondary btn-block btn-lg mt-1 text-light"><FontAwesomeIcon icon={faUserPlus} /> Sign In With Google </button>
                        </div> */}
                    </div>
                    {/* <div className="col-md-6">
                        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_AXoQyR.json"
                            background="transparent"
                            speed="1"
                            style={{ height: "600px" }}
                            loop
                            autoplay>
                        </lottie-player>
                    </div> */}

                </div>

            </div>

        </div>
    );
};

export default Login;