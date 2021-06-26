import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const ourAddress = [
        { name: "Khalishpur, Khulna" },
        { name: "Bangladesh" },

    ]
    const Blogs = [
        { name: "Retro Tech Blogs" },
        { name: "Retro Tech Description" },
        { name: "Retro Tech Description Link" },
    ]
    return (
        <footer id="contact" className="footer-area clear-both mt-5 h6">
            <div className="container pt-5 pb-3">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            {/* <img className="transaction-area" style={{ height: "50px" }} src={logo} alt="" /> */}
                            <h1 className="text-light display-3">Retro Tech Blogs</h1>
                        </div>
                        <h4 className="text-light ">“Good writing is remembering detail. Most people want to forget. Don’t forget things that were painful or embarrassing or silly. Turn them into a story that tells the truth.”
                        <br /> ~ Paula Danziger</h4>
                    </div>
                    <FooterCol key={1} menuTitle="Services" menuItems={Blogs} />
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h4>Call now</h4>
                            <button className="btn btn-brand btn-lg btn-light text-secondary">+416516456546</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-light">
                    <p>Copyright <span className="text-danger"> {(new Date()).getFullYear()}</span> All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;