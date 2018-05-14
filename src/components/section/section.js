import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './section.css';
import content from '../../locale/locale';
import commons from '../../utils/commons';
import Home from './home/home.js';
import History from './history/history.js';
import Programs from './programs/programs.js';
import ContactUs from './contactUs/contactUs.js';
import Members from './members/members.js';
import UpcomingEvents from './upcomingEvents/upcomingEvents.js';
import Gallery from './gallery/gallery.js';
import Facilities from './facilities/facilities';
import OfficeBearers from './officeBearers/officeBearers';

class Section extends Component {
    getLeftSpacing() {
        if(!window.isMobile){
            return (<div className="col-2 col-md-2 col-lg-2 left-content-space"></div>);
        }
        return null; 
    }
    getRightSpacing() {
        if(!window.isMobile){
            return (<div className="col-2 col-md-2 col-lg-2 right-content-space"></div>);
        }
        return null; 
    }
    changeScreen(screen) {
        this.scrollToContent(screen);
        this.props.changeScreen(screen);
    }
    getMenuList() {
        var self = this;
        return(
            this.props.screens.map(function(screen, index){
                if(screen === self.props.selectedScreen) {
                    return (<p className="active" key={index} onClick={self.changeScreen.bind(self,screen)}>{content[screen]}</p>);
                }
                else {
                    return (<p key={index} onClick={self.changeScreen.bind(self,screen)}>{content[screen]}</p>);
                }
            })
        );
    }
    getMobileMenu() {
        if(window.isMobile && this.props.showHeaders){
            return(
                <div className="mobile-menu-list">
                    {this.getMenuList()}
                </div>
            );
        }else {
            return null;
        }
    }
    scrollToContent(screen) {
        var contentElement = ReactDOM.findDOMNode(this.refs[screen]);
        window.scrollTo(contentElement, contentElement.offsetTop);
    }

    getAllContents(){
        var self = this;
        return (
            <div>
                <div className="row" ref="home"> {self.getLeftSpacing()} <Home/> {self.getRightSpacing()} </div>
                <div className="row" ref="officeBearers"> {self.getLeftSpacing()} <OfficeBearers/> {self.getRightSpacing()} </div>
                <div className="row" ref="programs"> {self.getLeftSpacing()} <Programs/> {self.getRightSpacing()} </div>
                <div className="row" ref="upcomingEvents"> {self.getLeftSpacing()} <UpcomingEvents/> {self.getRightSpacing()} </div>
                <div className="row" ref="facilities"> {self.getLeftSpacing()} <Facilities/> {self.getRightSpacing()} </div>
                <div className="row" ref="gallery"> {self.getLeftSpacing()} <Gallery/> {self.getRightSpacing()} </div>
                <div className="row" ref="contactUs"> {self.getLeftSpacing()} <ContactUs/> {self.getRightSpacing()} </div>
            </div>
        );
    }
    componentWillReceiveProps(nextProps){
        if(this.props.selectedScreen !== nextProps.selectedScreen) {
            this.scrollToContent(nextProps.selectedScreen);
        }
    }
    componentDidmount() {
        this.scrollToContent(this.props.selectedScreen);
    }
    render() {
        return (
            <div className="section">
                {this.getMobileMenu()}
                {this.getAllContents()}
            </div>
        );
    }
}

export default Section;
