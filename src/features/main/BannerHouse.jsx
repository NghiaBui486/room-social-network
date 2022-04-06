import React from 'react';
import './index.scss';
import './Banner.scss';
import images from './images';
import ReactCaroussel from 'react-caroussel';
import "react-caroussel/dist/index.css";
class BannerHouse extends React.Component{
  
            
        render(){
          
            return (
            <div className='containBanner'>
            <div>
            <ReactCaroussel className ='carsousel'
               slidesToShow={4}
              slidesToScroll={1}
                infinite={true}
               autoplay={false}
              speed={2}    // 2s: speed of autoplay
              display={{ 
              arrows: true, 
              dots: true ,
                }}>
                      <div className='di1'></div>
                      <div className='di2'></div>
                      <div className='di3'></div>
                      <div className='di4'></div>
                      <div className='di5'></div>
                      <div className='di6'></div>
                      <div className='di7'></div>
            </ReactCaroussel>
            </div>
            </div>
            );
    }
}

export default BannerHouse;