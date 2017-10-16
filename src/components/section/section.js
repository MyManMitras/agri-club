import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './section.css';
import content from '../../locale/locale';
import commons from '../../utils/commons';
import img1 from '../../assets/bacs1.jpg';
import img2 from '../../assets/bacs2.jpeg';
import img3 from '../../assets/bacs7.jpg';

class Section extends Component {
    getLeftSpacing() {
        if(!window.isMobile){
            return (<div className="col-2 col-md-2 col-lg-2 left-content-space" 
                style={{background: 'url('+img1+')'}}>
            </div>);
        }
        return null; 
    }
    getRightSpacing() {
        if(!window.isMobile){
            return (<div className="col-2 col-md-2 col-lg-2 right-content-space" 
                style={{background: 'url('+img3+')'}}>
            </div>);
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
        return this.props.screens.map(function(screen, index){
            return (
                <div className="row" ref={screen} key={index}>
                    {self.getLeftSpacing()}
                    <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                        <h1>{content[screen]}</h1>
                        <p>{content.homeContent1}</p>
                        <p>{content.homeContent2}</p>
                        <p>{content.homeContent3}</p>
                    </div>
                    {self.getRightSpacing()}
                </div>);
        });
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
