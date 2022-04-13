import React from 'react';
import '../scss_UI/Banner.scss';
import ReactCaroussel from 'react-caroussel';
import "react-caroussel/dist/index.css";
import { Carousel } from 'antd';
// class BannerHouse extends React.Component{
  
            
//         render(){
          
//             return (
//             <div>
//             {/* <div className ='carsousel'>
//             <ReactCaroussel 
//                slidesToShow={4}
//               slidesToScroll={1}
//                 infinite={true}
//                autoplay={false}
//               speed={2}    // 2s: speed of autoplay
//               display={{ 
//               arrows: true
//                 }}>
//                       <div className='di1'></div>
//                       <div className='di2'></div>
//                       <div className='di3'></div>
//                       <div className='di4'></div>
//                       <div className='di5'></div>
//                       <div className='di6'></div>
//                       <div className='di7'></div>
//             </ReactCaroussel>
//             </div> */}


//             </div>
//             );
//     }
// }

function BannerHouse() {
  return (
      <div className='containBanner'>
          <Carousel autoplay>
          <div>
          <h3 >
              <img 
                      style={{width:"100%",height:"60%",objectFit:'cover'}} 
                      alt="example" 
                      src="https://toplistsaigon.com/wp-content/uploads/2021/11/homestay-da-lat-7-min.jpg" />
          </h3>
          </div>
          <div>
          <h3 >
          <img 
                  style={{width:'100%',height:"60%"}} 
                  alt="example" 
                  src="https://bandon.vn/images/banner-chu-nha-tro-bandon-seo.png" />

          </h3>
          </div>
          <div>
          <h3 >
          <img 
                  style={{width:'100%',height:"60%",objectFit:'fill'}} 
                  alt="example" 
                  src="https://apis.sumica.ai/1/img/J8NAkWhytXAzNE4XKoTDk8kxKp8_LEKqSBnDCq_WhXs/g:sm/X2dQzAdTfCVu6bHp/C-96QIgxd5gnODOW/6Ys87dSc-4PJjQp4/_GZF-Q.jpg" />
          </h3>
          </div>
          <div>
          <h3 >
          <img 
                  style={{width:'100%',height:"60%",objectFit:'cover'}} 
                  alt="example" 
                  src="https://bandon.vn/images/banner-chu-nha-tro-bandon-seo.png" />
          </h3>
          </div>
        </Carousel>
      </div>
  );}

export default BannerHouse;