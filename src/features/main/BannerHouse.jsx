import React from 'react';
import './index.scss';
import './Banner.scss';
import images from './images';

class BannerHouse extends React.Component{
  
  render(){
    // var myIndex = 0;
    // carousel();
    // function carousel() {
    //   var i;
    //   var x = document.getElementsByClassName("MySlides");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";  
    //   }
    //   myIndex++;
    //   if (myIndex > x.length) {myIndex = 1}    
    //   x[myIndex-1].style.display = "block";  
    //   setTimeout(carousel, 1000); // Change image every 2 seconds
    // }
        return (
          <div className='containBanner'>
           
            <div>
                  <img class="MySlides" src={images.tro1} style={{width:"100%",height:400}} />
                   <img class="MySlides" src={images.tro2} style={{width:"100%",height:400}}/>
                  <img class="MySlides" src={images.tro3} style={{width:"100%",height:400}}/>
                  <img class="MySlides" src={images.tro4} style={{width:"100%",height:400}}/>
                  <img class="MySlides" src={images.tro5} style={{width:"100%",height:400}}/>
                  <img class="MySlides" src={images.tro6} style={{width:"100%",height:400}}/>
            </div>
          
             
          </div>
        );
    }
}

export default BannerHouse;