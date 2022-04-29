import React from 'react';
import './index.scss';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import image1 from '../../../../assets/images/modern-design.jpg';
import image2 from '../../../../assets/images/clean-design.jpg';
import image3 from '../../../../assets/images/great-support.jpg';
import image4 from '../../../../assets/images/easy-customise.jpg';
import image5 from '../../../../assets/images/unlimited-features.jpg';
import image6 from '../../../../assets/images/advanced-option.jpg';
import image7 from '../../../../assets/images/house1.jpg';
import image8 from '../../../../assets/images/house2.jpg';
const { Meta } = Card;

function listRoom (){
    const items = [
        {
          key: '1',
          title: 'Clean and Elegant',
          image: image1,
          diachi:"Quy Nhon"
        },
        {
          key: '2',
          title: 'Clean and Elegant',
          image: image2
        },
        {
          key: '3',
          title: 'Great Support',
          image: image3
        },
        {
          key: '4',
          title: 'Easy to customise',
          image: image4
        },
        {
          key: '5',
          title: 'Unlimited Features',
          image: image5
        },
        {
          key: '6',
          title: 'Advanced Options',
          image: image6
        },
        {
          key: '7',
          title: 'Advanced Options',
          image: image7
        },
        {
          key: '8',
          title: 'Advanced Options',
          image: image8
        }
      ];
      const listRoom = items.map((item) => {
        return (
          <Col md={{ span: 6}} key={item.key} >
            <a href="/room-social-network/detail/facd0009as9fffff-feidws456">
              <Card
                hoverable
                cover={<img alt={item.title} src={item.image} style={{height:200}}/>}
              >
                <Meta title={item.title} />
                <div>Diện tích: 40m²</div>
                <div>Địa chỉ: </div>
                <div>Đánh giá: ⭐️⭐️⭐️</div>
                <div>1.200.000đ/tháng</div>
              </Card>
            </a>
          </Col>
        )
      });
    return (<div className='container-listRoom'>
                    <Row gutter={[24,24]} >
                    
                        {listRoom}
                       
                    </Row>
    </div>);
}
export default listRoom;