import { Card, Col, Row, Button, Rate} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './room.css';
import { HomeOutlined, ShareAltOutlined, HeartOutlined  } from '@ant-design/icons';


function Room() {
    return( 
        <>
        <div className="site-room" style={{paddingLeft:50,backgroundColor:'#49e99c',fontSize:20,color:'#FFFAFA'}}>
        Tin mới đăng
        </div>
        <div className='room-search'>
        <Row  style={{paddingLeft:60}}>
            <Col  span={6}>
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://vcdn-giadinh.vnecdn.net/2020/08/18/received-697751297751351-jpeg-7926-4958-1597718429.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div style={{display:'flex'}}>
                                Đánh giá:
                            <div style={{marginTop:-7,marginLeft:5}}>
                                <Rate disabled defaultValue={3}/>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <HomeOutlined style={{fontSize:17}}/> 
                           <div style={{marginLeft:6}}> Quận 2-Hồ Chí Minh </div>
                        </div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20,marginTop:5}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
            <Col span={6} >
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://cdn.diemnhangroup.com/noithatdiemnhan/2021/07/thiet-ke-phong-tro-12m2-co-gac-lung-can-dam-bao-nhung-dieu-gi-1.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div style={{display:'flex'}}>
                                Đánh giá:
                            <div style={{marginTop:-7,marginLeft:5}}>
                                <Rate disabled defaultValue={3}/>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <HomeOutlined style={{fontSize:17}}/> 
                           <div style={{marginLeft:6}}> Quận 2-Hồ Chí Minh </div>
                        </div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20,marginTop:5}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
            <Col span={6} >
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://vcdn-giadinh.vnecdn.net/2020/08/18/received-697751297751351-jpeg-7926-4958-1597718429.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div style={{display:'flex'}}>
                                Đánh giá:
                            <div style={{marginTop:-7,marginLeft:5}}>
                                <Rate disabled defaultValue={3}/>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <HomeOutlined style={{fontSize:17}}/> 
                           <div style={{marginLeft:6}}> Quận 2-Hồ Chí Minh </div>
                        </div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20,marginTop:5}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
            <Col span={6} >
                <Card
                    hoverable
                    style={{ width: 250}}
                    cover={
                    <img className='img' 
                    alt="example" 
                    src="https://vcdn-giadinh.vnecdn.net/2020/08/18/received-697751297751351-jpeg-7926-4958-1597718429.jpg" 
                    />}
                    actions={[
                        <HeartOutlined style={{fontSize:20}}/>,
                        <ShareAltOutlined style={{fontSize:20}}/>
                    ]}
                >
                        <div className="gutter-row">Phòng trọ MINI</div>
                        <div>Diện tích: 20m2</div>
                        <div style={{display:'flex'}}>
                                Đánh giá:
                            <div style={{marginTop:-7,marginLeft:5}}>
                                <Rate disabled defaultValue={3}/>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <HomeOutlined style={{fontSize:17}}/> 
                           <div style={{marginLeft:6}}> Quận 2-Hồ Chí Minh </div>
                        </div>
                        <Button className='btnroom' type="primary" style={{backgroundColor:'#228B22',paddingTop:5,borderRadius:20,marginTop:5}}>
                            1.200.000đ/tháng
                        </Button>
                </Card>
            </Col>
        </Row>
        
        <div className='site-btnroom2'>
        <Button style={{ background: '#4169E1',color:'White',borderRadius:10}}>
            Xem tất cả
        </Button>
        </div>
        </div>
        </>
    );
}
export default Room;