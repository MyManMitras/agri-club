import React, { Component } from 'react';
import './footer.css';
import "@babel/polyfill";
import content from '../../locale/locale';
import commons from '../../utils/commons';

class Footer extends Component {

    state = { notifications: [], currentNotificationIndex: 0, notificationInterval: null };
    getNotificationInfoElement(index) {
        return (
            <div className={this.getDeviceSpecificClass()} key={index}>
                <span><strong>{content.notifications[index].title}</strong></span><br />
                <span>{content.notifications[index].date}</span><br />
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

    getNotifications(backward) {
        var nextState = {
            nots: [],
            index: 0
        };
        if(backward){
            nextState.index = this.getCorrectNotificationIndex(this.state.currentNotificationIndex - 1);
        } else {
            nextState.index = this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 1);
        }

        if (window.isMobile) {
            nextState.nots.push(this.getNotificationInfoElement(nextState.index));
        } else {
            //nextState.nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex)));
            //nextState.nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 1)));
            //nextState.nots.push(this.getNotificationInfoElement(this.getCorrectNotificationIndex(this.state.currentNotificationIndex + 2)));
        }
        
        return nextState;
    };
/*
    rewindNotification() {
        if(this.state.notificationInterval){
            clearInterval(this.state.notificationInterval);
        }
        this.setState({
            notificationInterval: setInterval(this.updateNotifications.bind(this,true), 7000)
        });
    };

    forwardNotification() {
        if(this.state.notificationInterval){
            clearInterval(this.state.notificationInterval);
        }
        this.setState({
            notificationInterval: setInterval(this.updateNotifications.bind(this), 7000)
        });
    }; */

    updateNotifications(backward){
        var nextState = this.getNotifications(backward);
        this.setState({
            notifications: nextState.nots,
            currentNotificationIndex: nextState.index
        });
    };

    componentWillMount() {
        this.updateNotifications();
        if(!this.state.notificationInterval){
            this.setState({
                notificationInterval: setInterval(this.updateNotifications.bind(this), 7000)
            });
        }
    };

    render() {
        if(window.isMobile) {
            return (
                <div className={commons.getMobileClassName('footer row')}>
                    {this.state.notifications}         
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Footer;
