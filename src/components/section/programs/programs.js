import React, { Component } from 'react';
import content from '../../../locale/locale';
import './programs.css';
import ImageGallery from 'react-image-gallery';
import ny1 from '../../../assets/NEW_YEAR/MSC_1221.JPG';
import ny2 from '../../../assets/NEW_YEAR/MSC_1236.JPG';
import ny3 from '../../../assets/NEW_YEAR/MSC_1257.JPG';

import cc1 from '../../../assets/CountryCLUB/20180626_223004_cp2.jpg';
import cc2 from '../../../assets/CountryCLUB/RPP_4986.jpg';
import cc3 from '../../../assets/CountryCLUB/RPP_5038.jpg';
import cc4 from '../../../assets/CountryCLUB/RPP_5171.jpg';
import cc5 from '../../../assets/CountryCLUB/RPP_5172.jpg';

import pj1 from '../../../assets/pooje/SRI_4790.jpg';
import pj4 from '../../../assets/pooje/SRI_5023.jpg';
import pj6 from '../../../assets/pooje/SRI_5046.jpg';
import pj8 from '../../../assets/pooje/SRI_5213.jpg';

import sr1 from '../../../assets/ShiladaraResort/RPP_3259.JPG';
import sr2 from '../../../assets/ShiladaraResort/RPP_3265.JPG';
import sr3 from '../../../assets/ShiladaraResort/RPP_3279.JPG';
import sr4 from '../../../assets/ShiladaraResort/RPP_3281.JPG';
import sr5 from '../../../assets/ShiladaraResort/RPP_3283.JPG';
import sr6 from '../../../assets/ShiladaraResort/RPP_3293.JPG';
import sr7 from '../../../assets/ShiladaraResort/RPP_3302.JPG';

import indp1 from '../../../assets/independenceDay/indp1.jpg';
import indp2 from '../../../assets/independenceDay/indp2.jpg';
import indp3 from '../../../assets/independenceDay/indp3_cp.jpg';
import indp4 from '../../../assets/independenceDay/indp4_cp.jpg';
import indp5 from '../../../assets/independenceDay/indp5.jpg';

import "react-image-gallery/styles/css/image-gallery.css";

class Programs extends Component {
    render() {
        const newYearimages = [{
            original: ny1,
            thumbnail: ny1
        },{
            original: ny2,
            thumbnail: ny2
        },{
            original: ny3,
            thumbnail: ny3
        }];

        const countryClubImages = [{
            original: cc1,
            thumbnail: cc1
        },{
            original: cc2,
            thumbnail: cc2
        },{
            original: cc3,
            thumbnail: cc3
        },{
            original: cc4,
            thumbnail: cc4
        },{
            original: cc5,
            thumbnail: cc5
        }];
        
        const poojeImages = [{
            original: pj1,
            thumbnail: pj1
        },{
            original: pj4,
            thumbnail: pj4
        },{
            original: pj6,
            thumbnail: pj6
        },{
            original: pj8,
            thumbnail: pj8
        }];

        const shilandraResortImages = [{
            original: sr1,
            thumbnail: sr1
        },{
            original: sr2,
            thumbnail: sr2
        },{
            original: sr3,
            thumbnail: sr3
        },{
            original: sr4,
            thumbnail: sr4
        },{
            original: sr5,
            thumbnail: sr5
        },{
            original: sr6,
            thumbnail: sr6
        },{
            original: sr7,
            thumbnail: sr7
        }];

        const indpImages = [{
            original: indp1,
            thumbnail: indp1
        },{
            original: indp2,
            thumbnail: indp2
        },{
            original: indp3,
            thumbnail: indp3
        },{
            original: indp4,
            thumbnail: indp4
        },{
            original: indp5,
            thumbnail: indp5
        }];
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['programs']}</h1>

                <div className="row program-content">
                    <h4>Club Building Opening Ceremony</h4>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <div className="thumbnail">
                            <ImageGallery items={poojeImages} showFullscreenButton={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showNav={false}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}The need for a specific and a nearby space for the club member's gathering was fulfilled by the structure located side by BM road near Guthalu. The building was inaugurated on 20th of October 2013 by then President of City Municipal Council Mr B.Siddaraju under the club Presidency of Mr C.Shrikante Gowda.</p>
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}Amenities like Gym, Guest rooms, Party Hall, Parking area etc have accomplished the complete needs of a Club and all of these are well utilised and appreciated by the members and the guests.</p>                    
                    </div>
                </div>

                <div className="row program-content">
                    <h4>Shilandra Resort Visit with Family</h4>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <div className="thumbnail">
                            <ImageGallery items={shilandraResortImages} showFullscreenButton={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showNav={false}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}Club has seen the happiness of a member in the happiness of their family. As a demonstration of this, club organised the Shilandra resort visit for the member's spouse and children on 25th of October 2017. The visit was a great success with participation of around 125 people and their enthusiasm.</p>
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}The entire day was filled with interactive sessions and knowledge share. An entertainment program by Mr Belliyapp & team, with their comic speech, lecture on life value and presentation skills was memorable event.</p>
                    </div>
                </div>  

                <div className="row program-content">
                    <h4>New Year Celebration-2018</h4>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <div className="thumbnail">
                            <ImageGallery items={newYearimages} showFullscreenButton={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showNav={false}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}Any celebration in the club with all the members will bring in an extra awareness on the surroundings and the society we are in. The same happened on the new year celebration, where the club honoured the achievements of an young singer Mr Danush Jagdeesh.</p>
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}The celebration continued with a musical night by a group of singers from Bangalore. The entertainment programs and the dinner facility was well organised for the members. The members and their family could feel the Club as the perfect venue for the celebration.</p>
                    </div>
                </div>

                <div className="row program-content">
                    <h4>Country Club Visit</h4>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <div className="thumbnail">
                            <ImageGallery items={countryClubImages} showFullscreenButton={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showNav={false}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}A two day tour to country club on 26th of June 2018 has brought in all the member's thoughts and concerns for the club. Participation of around 140 members laid us a platform to share and hear the future plans and achievements that the club should work for.</p>
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}The tour was very much fun filled with all the member's chit-chats and entertained with musical programs by Harsha & Team. It is much memorable for the amount of relaxation and the fun it gave to the members.</p>
                    </div>
                </div>
                
                <div className="row program-content">
                    <h4>Independence Day Celebration-2018</h4>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <div className="thumbnail">
                            <ImageGallery items={indpImages} showFullscreenButton={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showNav={false}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <p>{'\u00A0 \u00A0 \u00A0 \u00A0'}The club celebrated the Independence Day by memorizing the struggles and the victories our freedom fighters ran through to achieve the meaning for the day. The celebration was addressed by the President Mr B.Siddaraju. </p>
                        <p>The day sprinkled the thoughts on the disciplinary acts that the club has to consider for its brand and dignity. The knowledge on these regards was shared across and well accepted by the members.</p>
                    </div>
                </div>              
                <hr></hr>
            </div>
        );
    }
}

export default Programs;
