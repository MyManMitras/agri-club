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
    'Party Hall': hall
};
class Facilities extends Component {

    getBullets(item) {
        if(item.notes){
            return (<ul>
                {item.notes.map(function(note, index){
                    return (<li key={index}>{note}</li>);
                })}
            </ul>)
        }else{
            return null;
        } 

    }
    render() {
        var self = this;
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['facilities']}</h1>
                    {content['screens']['facilities']['list'].map(function(item, index){
                        return (
                        <div className="row" key={index}>    
                            <div className="col-sm-12 col-md-4 col-lg-4 col-4 facility-block" >
                                <div className="thumbnail">
                                    <img src={itemImages[item.name]} alt="..." className="facility-block-img"></img>
                                    <div className="caption">
                                        <h3>{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-8 col-8">
                                <p>{item.text}</p>
                                {self.getBullets(item)}
                            </div>
                        </div>)
                    })}
                <hr></hr>
            </div>
        );
    }
}

export default Facilities;
