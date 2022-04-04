import React from 'react';
import './index.scss';
import { LeftCircleOutlined, RightCircleOutlined  } from '@ant-design/icons';
class BannerHouse extends React.Component{
  
  render(){
    var img1 = ["https://th.bing.com/th/id/OIP.FNKRddw7KKYTxf-mCQgkRAHaEb?w=268&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.YI94pAa65omuIn4_s5CjaQHaE9?w=239&h=180&c=7&r=0&o=5&pid=1.7"
  ,"https://th.bing.com/th/id/OIP.peA214xR_pPtgO_4DaBxFwHaE7?w=241&h=180&c=7&r=0&o=5&pid=1.7"];   
        return (
          <div className='containBanner'>
            <div className='container'>
                <div className='left_circle'>
                <LeftCircleOutlined  style={{color:'black',fontSize:30}}/>
                </div>

                <div className='right_circle'>
                <RightCircleOutlined  style={{color:'black',fontSize:30}}/>
                </div>
                
                   <div className='slides'> 
                      <img src="https://th.bing.com/th/id/OIP.FNKRddw7KKYTxf-mCQgkRAHaEb?w=268&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                  </div>

                  <div className='slides'>
                      <img src="https://th.bing.com/th/id/OIP.YI94pAa65omuIn4_s5CjaQHaE9?w=239&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                  </div>

                  <div className='slides'>
                    < img src="https://th.bing.com/th/id/OIP.peA214xR_pPtgO_4DaBxFwHaE7?w=241&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
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