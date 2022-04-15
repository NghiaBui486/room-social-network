import React from 'react';
import 'antd/dist/antd.css';
import '../pages/product_detail.css';
import Involve from '../../../components/product_details/involve';
import Mockdata from '../../../components/product_details/data_table';
import NoteCmt from '../../../components/product_details/note_cmt';
import Slide from '../../../components/product_details/slider';
import Head from '../../../components/Hearder';
import Futer from '../../../components/Footer';
import { Rate } from 'antd';function Product_detail() {


  return (
    // <header></header>
    
    <body>
      <Head />
    <div className='container'>
      <strong style={{ textAlign: 'center',paddingLeft :'85px',fontSize: '30px', color: 'black'}}>Cho thuê phòng trọ chung cư có máy lạnh giá rẻ </strong>

      {/* Carousel */}
      <div className="slide"  >
        <Slide />
      </div>
      {/* Đổ dữ liệu vào table */}
      <div style={{ border: '1px solid white', margin: '20px 100px', lineHeight: '10xp' }}>
        <div className="data_table">
        <h4><strong style={{ paddingLeft: '20px'}}>Thông tin chi tiết:</strong></h4>
          <Mockdata />
        </div>
        {/* Đổ dự liệu văn bản */}
        <div className='mota'>
          <h4><strong>Mô tả:</strong></h4>

          <p>KHAI TRƯƠNG PHÒNG CHO THUÊ NGAY NGÃ TƯ GÒ MÂY VỚI GIÁ SIÊU RẺ 🌟</p>
          <p>Giá : 2tr6 - 3tr2 ( ban công riêng ) ❌ </p>

          <p>❌ Nội thất : Máy lạnh , Tủ quần áo , Tủ bếp trên - bếp dưới , Nước nóng NLMT</p>

          <p>🚦Vị trí : Nằm ngã tư gò mây thuận tiện sang ĐH Hufi , đường Phạm Đăng Giảng , Lê Trọng Tấn , Trường Chinh , Kênh 19/5 , Aeon Tân Phú</p>

          <p>🎁 Tiện ích :</p> 
          <p>➡️ Phòng mới sạch sẽ, rộng rãi, mới xây</p>
          <p>➡️ Trang bị đầy đủ tiện nghi</p>
          <p>➡️ Giờ giấc tự do, không chung chủ</p>
          <p>➡️ Máy giặt chung, camera an ninh, wifi, vệ sinh hành lang thường xuyên , cửa vân tay</p>
          <p>➡️ Bãi giữ xe rộng rãi</p> 

          <p>❌ Chi phí hợp lí :</p>
          <p>⚡️ Điện : 3,5k/Kwh</p> 
          <p>💦 Nước : 100k/người</p> 
          <p>🏍 Xe : Free</p>
          <p>✨ Phí dịch vụ : 100k/phòng</p> 

          <p>❌ Tăng 400.000/tháng đến khi làm gác</p> 

          <p>💥 PHÒNG HOT PHÒNG HOT LIÊN HỆ NHANH ĐỂ CÓ PHÒNG VỊ TRÍ ĐẸP NHẤT 💥</p>
          <p>----------------------------------------------</p> 
          <p>☎️ Điện thoại liên hệ:</p>
        </div>
        
        {/* Hiển thị danh sách các phòng tương thích */}
        <div className='involve'>
          <h4> <strong style={{ paddingLeft: '20px'}}>Phòng tương thích:</strong></h4>
          <Involve />
        </div>
        
        {/* <div className="comment">
          <h4>Danh sách bình luận</h4>
          <Cmt/>
        </div> */}
        {/* Comment */}
        <div className='comment' style={{color:'black',  paddingLeft: '20px'}} >
          <h4><strong>Bình luận:</strong></h4>
          <NoteCmt />
        </div>
      </div>
    </div>
    <Futer/>
    </body>
  );
}
export default Product_detail
