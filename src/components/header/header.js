import React, { Component } from 'react';
import './header.css';
import content from '../../locale/locale';
import logo from '../../assets/logoK.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="logo"/>
                <div className="corp-name">
                    <big style={{fontSize: 'xx-large'}}> Agri Club</big>
                    <span style={{lineHeight: 'initial'}}>Mandya</span>
                </div>
                <hr className="small-line" />
            </div>
        );
    }
}

export default Header;
