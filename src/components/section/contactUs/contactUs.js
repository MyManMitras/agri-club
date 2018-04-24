import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import main from '../../../assets/main2.JPG';

class ContactUs extends Component {
    render() {
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['contactUs']}</h1>
                <h3>Content will be updated soon!!!</h3>
            </div>
        );
    }
}

export default ContactUs;
