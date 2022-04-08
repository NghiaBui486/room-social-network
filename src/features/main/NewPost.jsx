import React from "react";
import './newPost.scss';
import { Card, Rate } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import {  } from '@fortawesome/react-fontawesome'
const { Meta } = Card;

class NewPost extends React.Component{
    render(){
        return(<div className="Contain_Post">
            <div className="tittle_New">
                <h3 style={{fontWeight:"bold",fontFamily:"Times new romans",fontSize:25,color:"#660000"}}>Tin mới đăng</h3>
            </div>
            <div className="contain_newsPost">
            <Card
                hoverable
                style={{ width: 240,height:400,border: "2px solid grey" }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                    <Meta title="Phòng trọ giá rẻ" description="" />
                    <Meta title="Diện tích: 18m2" description="" />
                    <div className="Rate">
                        <Meta title="Đánh giá: " description="" />
                    </div>
                  
                    <i class="fa-solid fa-star" style={{color:"black",fontSize:"30px"}}></i>
                   
                        
                       
                  
                   
            </Card>
            </div>
        </div>);
    }
}
export default NewPost;