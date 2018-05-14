import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import main from '../../../assets/main2.JPG';

class Home extends Component {
    render() {
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['home']}</h1>
                <img src={main} alt="The club front" height='350px' className="front-image"></img>
                <br/><br/>
                <p>{content.screens.home.text.p1}</p>
                <p>{content.screens.home.text.p2}</p>
                <p>{content.screens.home.text.p3}</p>
                <p>{content.screens.home.text.p4}</p>
                <hr></hr>
            </div>
        );
    }
}

export default Home;
