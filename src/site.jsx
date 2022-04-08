import { Card, Col, Row, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import BarChartOutlined from '@ant-design/icons/BarChartOutlined';
import DatabaseOutlined from '@ant-design/icons/DatabaseFilled';
import UserAddOutlined  from '@ant-design/icons/UserAddOutlined';

function Site() {
    return(
    <div className="site-card-wrapper" style={{padding:30,background:'#ececec',paddingLeft:110}}>
        <Row gutter={10} >
        <Col span={7}>
            <Card bordered={false} hoverable>
            <Card.Grid style={{width:380,fontSize:20,height:60,paddingTop:10}}>
           <div style={{display:'flex'}}> 
                <DatabaseOutlined style={{fontSize:35,padding:5}}/>
                <p style={{marginTop:8,color:'#8B4513',fontWeight:'bold'}}> Cho Thuê phòng trọ</p>
            </div>
            </Card.Grid>
            </Card>
            <Card style={{fontSize:20,textAlign:'center'}}>
            <p><BarChartOutlined style={{fontSize:35,padding:10}}/>3,141,141 Tin đăng</p>
            <p><BarChartOutlined style={{fontSize:35,padding:10}}/>3,141 Tin đăng trong 24h</p>
            </Card>
        </Col>
        <Col span={7}>
        <Card bordered={false} hoverable>
            <Card.Grid style={{width:380,fontSize:20,height:60,paddingTop:10}}>
            <div style={{display:'flex'}}> 
                <UserAddOutlined style={{fontSize:35,padding:5}}/>
                <p style={{marginTop:11,marginLeft:7,color:'#8B4513',fontWeight:'bold'}}>Tìm bạn ở ghép</p>
            </div>
            </Card.Grid>
            </Card>
            <Card style={{fontSize:20,textAlign:'center'}}>
            <p><BarChartOutlined style={{fontSize:35,padding:10}}/>3,141,141 Tin đăng</p>
            <p><BarChartOutlined style={{fontSize:35,padding:10}}/>3,141 Tin đăng trong 24h</p>
            </Card>
        </Col>
        <Col span={7} >
        <Card >
            <Card.Grid style={{width:440,fontSize:20,backgroundColor:'#4169E1',height:50,paddingLeft:10,paddingTop:13,fontWeight:'bold'}}>
            Từ khóa hot
            </Card.Grid>
            </Card>
            <Card style={{fontSize:20,paddingLeft:0,paddingRight:20,width:440 }}>
            <Button className='btn1'>Phòng trọ giá rẻ</Button>
            <Button className='btn2' style={{marginLeft:50}}>Phòng trọ Hồ Chí Minh</Button>
            <Button className='btn3' style={{marginLeft:30}}>Phòng trọ thủ đô</Button>
            <Button className='btn4' style={{marginLeft:30}}>Phòng trọ 5 sao</Button>
            <Button className='btn5'>Phòng trọ 1 triệu</Button>
            <Button className='btn6' style={{marginLeft:40}}>Phòng trọ gần trường đại học Quy Nhơn</Button>
            <Button className='btn7'>Phòng trọ đẹp</Button>
            </Card>
        </Col>
        </Row>
  </div>
    );
}
export default Site;