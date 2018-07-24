import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import main from '../../../assets/main2.JPG';
import './members.css';
import blankPhoto from '../../../assets/members/RPP.JPG';
import Select from 'react-select';
import memberPhotos from '../photos/photos';

class Members extends Component {
    state = {
        selectedMember: null,
    }
    handleChange = (selectedMember) => {
        this.setState({ selectedMember });
    }
    getPhotoSpace() {
        if(this.state.selectedMember){
            return (
                <div className="row">
                    <div className="col-xs-12 col-md-3 col-lg-3 col-3">
                        <a className="thumbnail">
                            <img src={memberPhotos[this.state.selectedMember.id]}></img>
                        </a>
                    </div>
                    <div className="col-xs-12 col-md-5 col-lg-5 col-5">
                        <h3>{this.state.selectedMember.label}</h3>
                        <h4>ID : {this.state.selectedMember.id}</h4>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    };
    disableFooter = () => {
        if(window.isMobile){
            this.props.disableFooter(true);
        }
    };
    enableFooter = () => {
        this.props.disableFooter(false);
    };
    render() {
        const { selectedMember } = this.state;
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['members']}</h1>
                <h3>Search the club members here,</h3>
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-6 col-6">
                        <Select 
                            value={selectedMember}
                            onChange={this.handleChange}
                            onFocus={this.disableFooter}
                            onBlur={this.enableFooter}
                            options={content['screens']['members']['list']}
                            placeholder="Type member name or id"
                            className = "search-box"
                        /><br/>
                    </div>
                </div>
                {this.getPhotoSpace()}
                <hr></hr>
            </div>
        );
    }
}

export default Members;
