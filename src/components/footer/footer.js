import React, { Component } from 'react';
import './footer.css';
import content from '../../locale/locale';
import commons from '../../utils/commons';

class Footer extends Component {

    state = { notifications: [], currentNotificationIndex: 0 };
    getNotificationInfoElement(index) {
        return (
            <div className={this.getDeviceSpecificClass()} key={index}>
                <span><strong>{content.notifications[index].title}</strong></span><br />
                <span>{content.date}: {content.notifications[index].date}</span><br />
                <span>{content.notifications[index].highlight}</span>
            </div>
        );
    };

    getDeviceSpecificClass() {
        if (window.isMobile) {
            return "col-12 col-sm-12 col-md-12 col-lg-12 event";
        } else {
            return "col-12 col-sm-12 col-md-6 col-lg-4 event";
        }
    };

    getCorrectNotificationIndex(index) {
        var correctIndex = index
        if (index < 0) {
            correctIndex = content.notifications.length - 1;
        } else {
            correctIndex = index % content.notifications.length;
        }

        return correctIndex;

    };

    getNotifications() {
        var nots = [];

        if (window.isMobile) {
            nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 1)));
        } else {
            nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex)));
            nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 1)));
            nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 2)));
        }
        this.setState({
            currentNotificationIndex: this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 1)
        });
        return nots;
    };

    updateNotifications(){
        this.setState({
            notifications: this.getNotifications()
        });
    }

    componentWillMount() {
        this.updateNotifications();
    }

    componentWillReceiveProps(){
        this.updateNotifications();
    }

    render() {
        return (
            <div className={commons.getMobileClassName('footer row')}>
                <span className="lang-switch hand-pointer" onClick={this.props.changeLanguage}>{content.switchLang}</span>
                <span className="mi mi-navigate-before left-event not-nav-icon"></span>
                {this.state.notifications}
                <span className="mi mi-navigate-next right-event not-nav-icon"></span>
            </div>
        );
    }
}

export default Footer;
