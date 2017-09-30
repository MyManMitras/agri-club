import React, { Component } from 'react';
import './footer.css';
import content from '../../locale/locale';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr />
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 event">
                        Event 1
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 event">
                        Event 2
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 event">
                        Event 3
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
