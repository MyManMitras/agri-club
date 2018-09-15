import React, { Component } from 'react';
import content from '../../../locale/locale';
import blankPhoto from '../../../assets/members/RPP.JPG';
import Iframe from 'react-iframe';
import './contactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['contactUs']}</h1>
                <div className="row">
                    <div className="col-xs-4 col-md-3 col-lg-3 col-3">
                        <a className="thumbnail">
                            <img src={blankPhoto} alt="Krishnegowda"></img>
                            <h5 className="name-middling">Krishnegowda</h5>
                            <h6 className="name-middling">Manager</h6>
                        </a>
                    </div>
                    <div className="col-xs-8 col-md-3 col-lg-3 col-3">
                        <h3>Agri Club</h3>
                        <h5>B.M Raod, Mandya - 571404</h5>
                        <h5>Phone: 9886053486</h5>
                        <h5>Fax: 08232-297050</h5>
                        <h5>eMail: Agriclubmandya1986@gmail.com</h5>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 col-6">
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7789.214493834182!2d76.9240234!3d12.5421576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa6cdb99c86c9%3A0xecc7b1c1f85f66ab!2z4LKF4LKX4LON4LKw4LK_IOCyleCzjeCysuCyrOCzjSBBZ3JpIENsdWI!5e0!3m2!1sen!2sin!4v1535218097394" height="200px" className="google-loc" ></Iframe>
                    </div>
                </div>
                <hr></hr>
                <small className="powered-by"> - Designed and Hosted by Strive Software Solutions Pvt Ltd</small>
            </div>
        );
    }
}

export default ContactUs;
