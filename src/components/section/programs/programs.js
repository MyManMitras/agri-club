import React, { Component } from 'react';
import content from '../../../locale/locale';
import './programs.css';
import ImageGallery from 'react-image-gallery';
import ny1 from '../../../assets/NEW_YEAR/MSC_1221.JPG';
import ny2 from '../../../assets/NEW_YEAR/MSC_1236.JPG';
import ny3 from '../../../assets/NEW_YEAR/MSC_1257.JPG';

import cc1 from '../../../assets/CountryCLUB/20180626_223004.jpg';
import cc2 from '../../../assets/CountryCLUB/RPP_4986.jpg';
import cc3 from '../../../assets/CountryCLUB/RPP_5038.jpg';
import cc4 from '../../../assets/CountryCLUB/RPP_5171.jpg';
import cc5 from '../../../assets/CountryCLUB/RPP_5172.jpg';

import pj1 from '../../../assets/pooje/SRI_4790.jpg';
import pj2 from '../../../assets/pooje/SRI_4797.jpg';
import pj3 from '../../../assets/pooje/SRI_5022.jpg';
import pj4 from '../../../assets/pooje/SRI_5023.jpg';
import pj5 from '../../../assets/pooje/SRI_5025.jpg';
import pj6 from '../../../assets/pooje/SRI_5046.jpg';
import pj7 from '../../../assets/pooje/SRI_5047.jpg';
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
import indp3 from '../../../assets/independenceDay/indp3.jpg';
import indp4 from '../../../assets/independenceDay/indp4.jpg';
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
            original: pj2,
            thumbnail: pj2
        },{
            original: pj3,
            thumbnail: pj3
        },{
            original: pj4,
            thumbnail: pj4
        },{
            original: pj5,
            thumbnail: pj5
        },{
            original: pj6,
            thumbnail: pj6
        },{
            original: pj7,
            thumbnail: pj7
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
                    <h4>Club Building Opening Ceremony-2013</h4>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <div className="thumbnail">
                            <ImageGallery items={poojeImages} showFullscreenButton={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showNav={false}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-6">
                        <br/>
                        <span>Content related to program will be updated soon!!</span>
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
                        <br/>
                        <span>Content related to program will be updated soon!!</span>
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
                        <br/>
                        <span>Content related to program will be updated soon!!</span>
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
                        <br/>
                        <span>Content related to program will be updated soon!!</span>
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
                        <br/>
                        <span>Content related to program will be updated soon!!</span>
                    </div>
                </div>              
                <hr></hr>
            </div>
        );
    }
}

export default Programs;
