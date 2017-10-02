import React, { Component } from 'react';
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
    render() {
        return (
            <div className="section">
                <div className="row">
                    {this.getLeftSpacing()}
                    <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                        <h1>{content[this.props.selectedScreen]}</h1>
                    </div>
                    {this.getRightSpacing()}
                </div>
            </div>
        );
    }
}

export default Section;
