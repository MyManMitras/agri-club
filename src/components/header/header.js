import React, { Component } from 'react';
import './header.css';
import "@babel/polyfill";
import content from '../../locale/locale';
import logo from '../../assets/logoK.png';
import commons from '../../utils/commons';

class Header extends Component {

    getVisibleNavs(self, screen, index) {
        if (screen === self.props.selectedScreen) {
            return (<li className="nav-item active" key={index} 
                    onClick={self.changeScreen.bind(self,screen)}><a className="nav-link" href={'#'+screen}>
                    {content[screen]}
            </a></li>);
        } else {
            return (<li className="nav-item"  key={index} 
                onClick={self.changeScreen.bind(self,screen)}>
                <a className="nav-link" href={'#'+screen}>
                {content[screen]}
            </a></li>);
        }
    }
    getNavBar() {
        var self = this;
        return (
            <ul className="nav nav-pills">
                {this.props.screens.map(function (screen, index) {
                    if(index < 5) {
                        return self.getVisibleNavs(self, screen, index);
                    }
                    return null;
                })}

                <li role="presentation" className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Other <span className="caret"></span>
                </a>
                    <ul className="dropdown-menu">
                        {this.props.screens.map(function(screen, index){
                            if(index >= 5) {
                                return (<li key={index} onClick={self.changeScreen.bind(self,screen)}>
                                    <a href={'#'+screen}>{content[screen]}</a>
                                </li>);
                            }
                            return null;
                        })}
                    </ul>
                </li>
            </ul>
        );
    }
    getNavDropDown() {
        return (
            <span className="mobile-menu">
                <span className="screen-name">{content[this.props.selectedScreen]}</span>
                <span className="mi mi-menu icon " onClick={this.props.toogleMobileHeader}></span>
            </span>);
    };
    getNavigation() {
        if (window.isMobile) {
            return this.getNavDropDown();
        } else {
            return this.getNavBar();
        }
    };
    changeScreen(screen) {
        this.props.changeScreen(screen);
    }
    getLogForNoMobileDevices() {
        if(!window.isMobile) {
            return (<img src={logo} className="logo" alt="Agri club Logo"/>);
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className={commons.getMobileClassName('header')} >
                <div className="header-content">
                    {this.getLogForNoMobileDevices()}
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
