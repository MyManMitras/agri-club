import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import main from '../../../assets/main2.JPG';
import './officeBearers.css';
import memberPhotos from '../photos/photos';

class OfficeBearers extends Component {
    render() {
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['officeBearers']}</h1>
                <div className="row">
                    {
                        content['screens']['officeBearers']['list'].map(function(person, index){
                            return (<div className="col-xs-6 col-md-3 col-lg-3 col-3" key={index}>
                                <a className="thumbnail">
                                    <img src={memberPhotos[person.photoId]} ></img>
                                    <h4 className="name-middling">{person.name}</h4>
                                    <h5 className="name-middling">{person.title}</h5>
                                </a>
                            </div>);
                        })
                    }
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default OfficeBearers;
