import React, { Component } from 'react';
import content from '../../../locale/locale';
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
                                    <img src={memberPhotos[person.photoId]} alt={person.name}></img>
                                    <h5 className="name-middling">{person.name}</h5>
                                    <h6 className="name-middling">{person.title}</h6>
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
