import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import content from '../../../locale/locale';
import commons from '../../../utils/commons';
import main from '../../../assets/main2.JPG';
import img0 from '../../../assets/000.JPG';
import img10 from '../../../assets/010.jpg';
import img2 from '../../../assets/002.jpg';
import img3 from '../../../assets/003.jpg';
import img4 from '../../../assets/004.jpg';
import img5 from '../../../assets/005.JPG';
import img6 from '../../../assets/006.JPG';
import img7 from '../../../assets/007.JPG';
import img8 from '../../../assets/008.JPG';
import img9 from '../../../assets/009.jpg';
import img12 from '../../../assets/012.jpg';
import img13 from '../../../assets/013.JPG';
import img14 from '../../../assets/NIK_8948.JPG';
import img15 from '../../../assets/NIK_8953.JPG';
import img16 from '../../../assets/SRI_5023.jpg';
import img17 from '../../../assets/SRI_5025.jpg';
import img18 from '../../../assets/SRI_5384.jpg';
import img19 from '../../../assets/SRI_5387.jpg';
import img20 from '../../../assets/SRI_5388.jpg';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Gallery extends Component {
    render() {
        const images = [
            {
              original: main,
              thumbnail: main,
            },
            {
                original: img4,
                thumbnail: img4
              },
              {
                original: img5,
                thumbnail: img5
              },
              {
                original: img6,
                thumbnail: img6
              },
              {
                original: img7,
                thumbnail: img7
              },
              {
                original: img8,
                thumbnail: img8
              },
              {
                original: img9,
                thumbnail: img9
              },
              {
                original: img10,
                thumbnail: img10
              },
              {
                original: img12,
                thumbnail: img12
              },
              {
                original: img13,
                thumbnail: img13
              },
              {
                original: img14,
                thumbnail: img14
              },
              {
                original: img15,
                thumbnail: img15
              },
              {
                original: img16,
                thumbnail: img16
              },
              {
                original: img17,
                thumbnail: img17
              },
              {
                original: img18,
                thumbnail: img18
              },
              {
                original: img19,
                thumbnail: img19
              },
              {
                original: img20,
                thumbnail: img20
              }
          ]
        return (
            <div className="col-8 col-sm-12 col-md-8 col-lg-8 actual-content">
                <h1>{content['gallery']}</h1>
                <ImageGallery items={images} />
                <hr></hr>
            </div>
        );
    }
}

export default Gallery;
