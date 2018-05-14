import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './facilities.css';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import gym from '../../../assets/013.JPG';
import room from '../../../assets/SRI_5387.jpg';
import cards from '../../../assets/008.JPG';
import hall from '../../../assets/007.JPG';

const itemImages = {
    'Gym': gym,
    'Rooms' : room,
    'Cards': cards,
    'Part Hall': hall
};
class Facilities extends Component {
    render() {
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['facilities']}</h1>
                <div className="row">
                    {content['screens']['facilities']['list'].map(function(item, index){
                        return (<div className="col-sm-12 col-md-6 col-lg-6 col-6 facility-block">
                                    <div className="thumbnail">
                                        <img src={itemImages[item.name]} alt="..." className="facility-block-img"></img>
                                        <div className="caption">
                                            <h3>{item.name}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                            </div>)
                    })}
            </div>
                <hr></hr>
            </div>
        );
    }
}

export default Facilities;
