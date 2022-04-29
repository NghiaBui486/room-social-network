import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Card, Rate } from 'antd';
import evaluationService from '../../../../services/evaluationService';
import { useParams } from "react-router-dom";
const { Meta } = Card;

function RoomsInfo(props) {
  var items = props.data;

  const [evadata, setevaData] = useState([]);
  useEffect(() => {
    evaluationService.evaluationRoom().then((res) => {
      setevaData(res);
      // console.log(res);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const roomsInfo = items.map((item) => {
    const evaluation = evadata.find(element => element.roomId === item.roomId)
    if (evaluation) {
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
              <div>Đánh giá: <Rate disabled defaultValue={evaluation.rate} /></div>
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
        {props.desc ? <p>{props.desc}</p> : <></>}
      </div>
      <Row gutter={[16, 16]} >
        {roomsInfo}
      </Row>
    </div>
  );
}

export default RoomsInfo;