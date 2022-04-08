import React from "react";
import './hot_key.scss';
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
                            <DatabaseOutlined style={{fontSize:50,color:"black"}}/>
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
                                             1.565.4944 Tin đã đăng
                                        </h3>     
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="hot_key2"></div>
                <div className="hot_key3"></div>
            </div>
        );
    }
}

export default Hot_key;