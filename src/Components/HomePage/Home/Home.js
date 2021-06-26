import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import '../../Styles/Styles.css'
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className="header">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div className="card-bg1 pt-5">
                <Blog></Blog>
            </div>
            <div className="footer-bg pt-5">
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Home;