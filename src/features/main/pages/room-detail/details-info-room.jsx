import React, {useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import { Card, Rate } from 'antd';
import roomService from '../../../../services/roomService';
const { Meta } = Card;
function DetailsInfoRoom (props){
  const [roomdata,setroomData] = useState([]);
  useEffect(()=>{
    roomService.authentroom().then((res) => {
      setroomData(res);
        console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });  
  },[]);
  const roomsDelail = roomdata.map((item) => {
    {
      return (
        <Col md={{ span: 8 }} key={item.roomId} >
          <a href={`/room-social-network/detail/${item.roomId}`}>
            <Card
              hoverable
              cover={<img alt={item.descriptionRoom} />}
            >
              <Meta title={item.descriptionRoom} />
              <div>Diện tích:{item.capacity}m2</div>
              <div>Địa chỉ: {item.street} </div>
              <div>Đánh giá: </div>
              <div>Giá: {item.price}/tháng</div>
            </Card>
          </a>
        </Col>
      )
    }
  });
  return (
    <div className="container-fluid">
      <div className="titleHolder">
        <h2>{props.title}</h2>
      </div>
      <Row gutter={[16, 16]} >
        {roomsDelail}
      </Row>
    </div>
  );
}

export default DetailsInfoRoom;
