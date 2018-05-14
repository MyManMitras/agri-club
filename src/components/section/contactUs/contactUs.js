import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import main from '../../../assets/main2.JPG';
import blankPhoto from '../../../assets/blankPhoto.jpg';

class ContactUs extends Component {
    render() {
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['contactUs']}</h1>
                <div className="row">
                    <div className="col-md-2 col-lg-2 col-2"></div>
                    <div className="col-xs-12 col-md-3 col-lg-3 col-3">
                        <a className="thumbnail">
                            <img src={blankPhoto}></img>
                            <h4 className="name-middling">Krishnegowda</h4>
                            <h5 className="name-middling">Manager</h5>
                            <h5 className="name-middling">9886053486</h5>
                        </a>
                    </div>
                    <div className="col-xs-12 col-md-5 col-lg-5 col-5">
                        <h3>Agri Club</h3>
                        <h4>B.M Raod, Mandya - 571404</h4>
                        <h4>Phone: 08232-297050</h4>
                        <h4>Fax: 08232-297050</h4>
                        <h4>eMail: agri-club@sample.com</h4>
                    </div>
                    <div className="col-md-2 col-lg-2 col-2"></div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
