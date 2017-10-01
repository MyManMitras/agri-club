import React, { Component } from 'react';
import './header.css';
import content from '../../locale/locale';
import logo from '../../assets/logoK.png';
import commons from '../../utils/commons';

class Header extends Component {
    getNavBar() {
        var self = this;
        return (
            <ul className="nav nav-pills">
                {this.props.screens.map(function (screen, index) {
                    if (screen === self.props.selectedScreen) {
                        return (<li className="nav-item active" key={index}><a className="nav-link" href="#sec1">
                            {content[screen]}
                        </a></li>);
                    } else {
                        return (<li className="nav-item"  key={index}><a className="nav-link" href="#sec1">
                            {content[screen]}
                        </a></li>);
                    }
                })}
            </ul>
        );
    }
    getNavDropDown() {
        return (
            <span className="mobile-menu">
                <span className="screen-name">{content[this.props.selectedScreen]}</span>
                <span className="mi mi-menu icon "></span>
            </span>);
    };
    getNavigation() {
        if (window.isMobile) {
            return this.getNavDropDown();
        } else {
            return this.getNavBar();
        }
    };
    render() {
        return (
            <div className={commons.getMobileClassName('header')} >
                <div className="header-content">
                    <img src={logo} className="logo" />
                    <div className="corp-name">
                        <big style={{ fontSize: 'xx-large' }}> {content.name}</big>
                        <span style={{ lineHeight: 'initial' }}>{content.place}</span>
                    </div>
                    <div className="agri-navs pull-right">
                        {this.getNavigation()}
                    </div>
                </div>
                <div className="separator">
                    <hr className="small-line" />
                </div>
            </div>
        );
    }
}

export default Header;
