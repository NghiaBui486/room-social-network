import React from 'react';
import './index.scss';
import { LeftCircleOutlined, RightCircleOutlined  } from '@ant-design/icons';
import img1 from '../main/Img/tro1.jpg';
import img2 from '../main/Img/tro2.jpg';
import img3 from '../main/Img/tro3.jpg';
class BannerHouse extends React.Component{
  
  render(){
    const changeIMG = () =>{
      var index = 1;
      var arr1 = [img1,img2,img3]; 
      document.getElementById('img').src = arr1[index] ;
      index ++;
      if(index == 3){
        index = 0;
      }
      var f = () => changeIMG();
      setInterval(f,1000);
    }
      
        return (
          <div className='containBanner'>
            <div className='container'>
                <div className='left_circle'>
                <LeftCircleOutlined  style={{color:'black',fontSize:30,cursor: "pointer"}}/>
                </div>

                <div className='right_circle'>
                <RightCircleOutlined  style={{color:'black',fontSize:30,cursor: "pointer"}}/>
                </div>
                
                   <div className='slides'> 
                      <img id ='img' onClick={() => changeIMG()} src={img1} alt="" />
                  </div>

                  <div className='slides'>
                      <img src={img2} alt="" />
                  </div>

                  <div className='slides'>
                    < img src={img3} alt="" />
                  </div>

                <div className='nevigation'>
                  <label id ='lb1' for ="bottom_1" className='bar'></label>
                  <label for ="bottom_2" className='bar'></label>
                  <label for ="bottom_3" className='bar'></label>
                  <label for ="bottom_4" className='bar'></label>
                  <label for ="bottom_5" className='bar'></label>
             </div>
      
            </div>
          </div>
        );
    }
}

export default BannerHouse;