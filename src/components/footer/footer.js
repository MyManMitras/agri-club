import React, { Component } from 'react';
import './footer.css';
import content from '../../locale/locale';
import commons from '../../utils/commons';

const notifications = [
    {
        title: 'A Sample Event Name 1',
        date: '14th Jan 2017',
        highlight: 'CM addresed the gathering'
    },{
        title: 'A Sample Event Name 2',
        date: '01st Feb 2017',
        highlight: 'CM addresed the gathering'
    },{
        title: 'A Sample Event Name 3',
        date: '25th Feb 2017',
        highlight: 'CM addresed the gathering'
    },{
        title: 'A Sample Event Name 4',
        date: '20th Mar 2017',
        highlight: 'CM addresed the gathering'
    },{
        title: 'A Sample Event Name 5',
        date: '14th Apr 2017',
        highlight: 'CM addresed the gathering'
    }
];
class Footer extends Component {
    getNotifications() {
        var nots = [];

        for(var index = 0; index < (window.isMobile ? 1 : 3) ; index++) {
            nots.push(
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 event" key={index}>
                     <span><strong>{notifications[index].title}</strong></span><br/>
                     <span>Date: {notifications[index].date}</span><br/>
                     <span>{notifications[index].highlight}</span>
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
