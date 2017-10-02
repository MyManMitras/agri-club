import React, { Component } from 'react';
import './footer.css';
import content from '../../locale/locale';
import commons from '../../utils/commons';

class Footer extends Component {
    getNotifications() {
        var nots = [];

        for(var index = 0; index < (window.isMobile ? 1 : 3) ; index++) {
            nots.push(
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 event" key={index}>
                     <span><strong>{content.notifications[index].title}</strong></span><br/>
                     <span>{content.date}: {content.notifications[index].date}</span><br/>
                     <span>{content.notifications[index].highlight}</span>
                </div>
            );
        }

        return nots;
    };

    render() {
        return (
            <div className={commons.getMobileClassName('footer row')}>
                <span className="mi mi-navigate-before left-event not-nav-icon"></span>
                {this.getNotifications()}
                <span className="mi mi-navigate-next right-event not-nav-icon"></span>
            </div>
        );
    }
}

export default Footer;
