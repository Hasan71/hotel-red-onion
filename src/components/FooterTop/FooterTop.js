import React from 'react';
import './FooterTop.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
const FooterTop = () => {
    return (
        <section className="footer-top-area py-5">
            <div className="container">
                <div className="row">
                <div className="col-xl-6">
                    <div className="img-area">
                    <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="col-xl-6 d-flex footer-top-menu-aria">
                    <div>
                        <ul>
                            <li><Link to="/">About online food</Link></li>
                            <li><Link to="/">Read our Blog</Link></li>
                            <li><Link to="/">Sign up to deliver</Link></li>
                            <li><Link to="/">Add your restaurant</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Get help</Link></li>
                            <li><Link to="/">Red FAQs</Link></li>
                            <li><Link to="/">View all Cities</Link></li>
                            <li><Link to="/">Restaurant near me</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default FooterTop;