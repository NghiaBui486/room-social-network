import React from "react";
import '../scss_UI/hot_key.scss';
import { Card, Col, Row, Button } from 'antd';
import 'antd/dist/antd.css';
import BarChartOutlined from '@ant-design/icons/BarChartOutlined';
import DatabaseOutlined from '@ant-design/icons/DatabaseFilled';
import UserAddOutlined  from '@ant-design/icons/UserAddOutlined';
class Hot_key extends React.Component{
    render(){
        return (
            <div className="hot_key_word">
                <div className="hot_key1">
                     <div className="hot_title1">
                            <div className="ic1">
                            <DatabaseOutlined style={{fontSize:30,color:"black"}}/>
                            </div>
                            <div className="title1">
                            <p style={{color:'#660000',fontWeight:'bold',fontSize:20,
                            position:"relative",bottom:15}}>
                                 Cho Thuê phòng trọ</p>
                            </div>
                      
                    </div>
                    <div className="statistics">
                        <div className="non_statistics">
                                <div className="non_statistics1">
                                    <div className="statistics_ic1">
                                    <BarChartOutlined style={{color:"black",fontSize:40}}/>
                                    </div>

                                    <div className="statistics_data1">
                                        <h3 style={{position:"relative",top:10,right:10}}>
                                             1.565.4944 Tin đăng
                                        </h3>     
                                    </div>
                                </div>
                                <div className="non_statistics2">
                                <div className="statistics_ic2">
                                    <BarChartOutlined style={{color:"black",fontSize:40}}/>
                                    </div>

                                    <div className="statistics_data2">
                                        <h3 style={{position:"relative",top:10,right:10}}>
                                             1.565.4944 Tin mới trong 24h
                                        </h3>     
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="hot_key2">
                     {/* {{Contain class hot key 2}} */}
                    <div className="room_sharing">
                         {/* {{Contain class room sharing}} */}
                        <div className="ic_share">
                             {/* {{Contain icon}} */}
                                <UserAddOutlined style={{fontSize:30,color:"black"}}/>
                        </div>
                        <div className="title_sharing">
                             {/* {{Contain title room_sharing}} */}
                            <p style={{color:'#660000',fontWeight:'bold',fontSize:20,position:"relative",bottom:15}}>
                            Tìm bạn ở ghép</p>
                        </div>
                    </div>
                     {/* {{Contain statistics room sharing}} */}
                    <div className="statistics_room_sharing">

                         {/* {{Contain non class statistics}} */}
                        <div className="non_statistics_room_sharing">

                             {/* {{Contain non statistics room sahring 1}} */}
                                <div className="non_statistics_room_sharing1">

                                         {/* {{Contain non statistics room sharing ic1}} */}
                                    <div className="statistics_ic1_roomshare">
                                    <BarChartOutlined style={{color:"black",fontSize:40}}/>
                                    </div>

                                     {/* {{Contain non class statistics data room sharing 1}} */}
                                    <div className="statistics_data_roomshare">
                                        <h3 style={{position:"relative",top:10,right:10}}>
                                             1.565.4944 Tin đăng
                                        </h3>     
                                    </div>
                                </div>
                                 {/* {{Contain non class statistics room sharing 2}} */}
                                <div className="non_statistics_roomShare2">

                                     {/* {{Contain non class statistics ic room sharing 2}} */}
                                <div className="statistics_roomshare_ic2">
                                    <BarChartOutlined style={{color:"black",fontSize:40}}/>
                                    </div>

                                        {/* {{Contain non class statistics data room sharing 2}} */}
                                    <div className="statistics_data_roomsharing2">
                                        <h3 style={{position:"relative",top:10,right:10}}>
                                             1.565.4944 Tin mới trong 24h
                                        </h3>     
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                 <div className="hot_key3"> 
                    <div className="key_title">
                        <h2 style={{fontWeight:"bold",color:"white"}}>Từ khóa Hot</h2>
                    </div>
                    <div className="key_content">
                        <div className="btn_hot">
                            <Button className='btn1'>Phòng trọ giá rẻ</Button>
                        </div>

                        <div className="btn_hot">
                             <Button className='btn2'>Phòng trọ Hồ Chí Minh</Button>
                        </div>

                        <div className="btn_hot">
                            <Button className='btn3'>Phòng trọ thủ đô</Button>
                        </div>

                        <div className="btn_hot">
                             <Button className='btn4'>Phòng trọ 5 sao</Button>
                        </div>

                        <div className="btn_hot">
                            <Button className='btn5'>Phòng trọ 1 triệu</Button>
                        </div>

                        <div className="btn_hot">
                            <Button className='btn6'>Phòng trọ đẹp</Button>
                        </div>

                   
                    </div>
                </div> 
            </div>
        );
    }
}

export default Hot_key;