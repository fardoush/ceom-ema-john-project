import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';
const Header = () => {
    return (
        <div>
            <nav className="header section-lr-padding">

                <img src={logo} alt="" />

                <div className="menu-item">
                    {/* a*4[href=$]{$} */}
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;