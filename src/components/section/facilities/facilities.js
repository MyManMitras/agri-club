import React, { Component } from 'react';
import './facilities.css';
import content from '../../../locale/locale';
import gym from '../../../assets/gym.jpg';
import room from '../../../assets/rooms.jpg';
import cards from '../../../assets/cards.jpg';
import hall from '../../../assets/party_hall.jpg';

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
                        return (<div className="col-sm-12 col-md-3 col-lg-3 col-3 facility-block" key={index}>
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
