import React, { Component } from 'react';
import './section.css';
import content from '../../locale/locale';
import commons from '../../utils/commons';

class Section extends Component {
    getLeftSpacing() {
        if(!window.isMobile){
            return (<div className="col-2 col-md-2 col-lg-2 left-content-space"></div>);
        }
        return null; 
    }
    getRightSpacing() {
        if(!window.isMobile){
            return (<div className="col-2 col-md-2 col-lg-2 rigth-content-space"></div>);
        }
        return null; 
    }
    render() {
        return (
            <div className="section">
                <div className="row">
                    {this.getLeftSpacing()}
                    <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                        Content Here!!!
                    </div>
                    {this.getRightSpacing()}
                </div>
            </div>
        );
    }
}

export default Section;
