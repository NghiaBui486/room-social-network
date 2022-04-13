import React from "react";
import '../features/main/index.scss';
import { Button } from 'antd';
class Header extends React.Component{
    render(){
        return (<div className="head">
                     <div class ='left_head'>
                      <h1 style={{color:'white', textAlign:'center',position:"relative",left:200,paddingLeft:200,height:20,fontFamily:"Times New Roman"}}>CHO THUÊ PHÒNG TRỌ</h1>
                          <h1 style={{color:'aqua', fontSize: '50px',width: 30,position:"relative",bottom:15}}>TMA</h1>
                            <div> 
                                <li>Trang chủ</li>
                                <li>Giới thiệu</li>
                                <li>Thông tin phòng trọ</li>
                                <li>Liên hệ</li>
                            </div>

                            <div className="right_head">
                                <Button type="primary">Đăng tin</Button>
                                <li>Đăng nhập</li>
                                <li>Đăng kí</li>
                            </div>
                        </div>
        </div>);
    }
}

export default Header;