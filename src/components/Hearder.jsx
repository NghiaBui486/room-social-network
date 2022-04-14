import React from "react";
import '../features/main/index.scss';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){

        const Reload = () => {
            
            window.location.reload();
    
        }
        return (<div className="head">
                     <div class ='left_head'>
                      <h1 style={{color:'white', textAlign:'center',position:"relative",left:200,paddingLeft:200,height:20,fontFamily:"Times New Roman"}}>CHO THUÊ PHÒNG TRỌ</h1>

                          <h1 onClick={()=>Reload()} style={{ fontSize: '50px',width: 30,position:"relative",bottom:15,cursor:"pointer"} }><Link style={{color:"aqua"}} to='/room-social-network'>TMA</Link></h1>
                            <div> 
                                <li  onClick={()=>Reload()} style={{cursor:"pointer"}}><Link style={{color:"white"}} to='/room-social-network'>Trang chủ</Link></li>
                                <li style={{cursor:"pointer"}} >Giới thiệu</li>
                                <li style={{cursor:"pointer"}}>Thông tin phòng trọ</li>
                                <li style={{cursor:"pointer"}} >Liên hệ</li>
                            </div>

                            <div className="right_head">
                                <Button type="primary">Đăng tin</Button>
                                <li style={{cursor:"pointer"}}>Đăng nhập</li>
                            </div>
                        </div>
        </div>);
    }
}

export default Header;