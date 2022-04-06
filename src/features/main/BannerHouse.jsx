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
               slidesToShow={3}
              slidesToScroll={3}
                infinite={true}
               autoplay={false}
              speed={2}    // 2s: speed of autoplay
              display={{ 
                arrows: true, 
                dots: true 
                }}>
                      <div className='di1'>
                      <img class="mySlides" src={images.tro1} style={{width:"auto",height:"auto"}}/>
                      </div>
                      <div className='di1'>2</div>
                      <div className='di1'>3</div>
                      <div className='di1'> 4</div>
                      <div className='di1'>5</div>
                      <div className='di1'>6</div>
        </ReactCaroussel>
            </div>
            </div>
            );
    }
}

export default BannerHouse;