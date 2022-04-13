import React from 'react';
import images from "../../../images";
import { Image } from 'antd';
import { Typography} from 'antd';
import '../scss_UI/roomStayProvinces.scss';
const { Link } = Typography;
class Room_Stay_Provinces extends React.Component{
    render(){
        return (<div class ="container_roomProvinces">
        <div className='province_title'>
            <div className='bigTitle'>
                <h2 style={{color:"#660000",fontWeight:"bold", fontFamily:"Times new Romans"}}>Khám phá phòng trọ ở các thành phố lớn</h2></div>
            <div className='nonTitle'>
                <h2 style={{ fontFamily:"Times new Romans"}}>Tìm kiếm phòng trọ trong thành phố và các tỉnh liên quan</h2>
            </div>
        </div>

        <div className='detail_roomProvinces'>
            {/* {detail1} */}
            <div className='detail'>
                <div className='detail_1'>
                        <div className="titleOfPlace"><h1 style={{color:"white",marginLeft:5}}>Hà Nội</h1></div>
                        <div className="detailOfPlace"><h2 style={{color:"white"}}>Chi tiết</h2></div>
                        <div className="overlay1" ><p style={{paddingBottom:5}}>Bấm vào để xem </p></div>
                </div>
             </div>
           
             {/* {detail2} */}
            <div className='detail'>
                <div className='f_img'>
                        <div className="titleOfPlace"><h1 style={{color:"white",marginLeft:5}}>Lâm Đồng</h1></div>
                        <div className="detailOfPlace2"><h2 style={{color:"white",fontFamily:"Times New Romans"}}>Chi tiết</h2></div>
                        <div className="overlay2_1"><p style={{paddingBottom:5}}>Bấm vào để xem</p></div>
                </div> 

                <div className='mid_img'></div> 

                 <div className='s_img'>
                        <div><h1 style={{color:"white",marginLeft:5}}>Khánh Hòa</h1></div>
                        <div className="detailOfPlace2_2"><h2 style={{color:"white",fontFamily:"Times New Romans"}}>Chi tiết</h2></div>
                        <div className="overlay2_2"><p>Bấm vào để xem</p></div>
                </div> 
            </div> 

             {/* {detail3} */}
            <div className='detail'>
                <div className='detail_3'>
                            <div className="titleOfPlace"><h1 style={{color:"white",marginLeft:5}}>Bình Dương</h1></div>
                            <div className="detailOfPlace"><h2 style={{color:"white"}}>Chi tiết</h2></div>
                            <div className="overlay3" ><p style={{paddingBottom:5}}>Bấm vào để xem </p></div>
                    </div>
            </div> 

            {/* {detail4} */}
            <div className='detail'>
                <div className='f4_img'>
                            <div className="titleOfPlace"><h1 style={{color:"white",marginLeft:5}}>Hải Phòng</h1></div>
                            <div className="detailOfPlace2"><h2 style={{color:"white",fontFamily:"Times New Romans"}}>Chi tiết</h2></div>
                            <div className="overlay2_1"><p style={{paddingBottom:5}}>Bấm vào để xem</p></div>
                    </div> 

                    <div className='mid_img'></div> 

                    <div className='s4_img'>
                            <div><h1 style={{color:"white",marginLeft:5}}>Bà Rịa - Vũng Tàu</h1></div>
                            <div className="detailOfPlace2_2"><h2 style={{color:"white",fontFamily:"Times New Romans"}}>Chi tiết</h2></div>
                            <div className="overlay2_2"><p>Bấm vào để xem</p></div>
                    </div> 
            </div>

            {/* {detail5} */}
            <div className='detail'>
                <div className='detail_5'>
                            <div className="titleOfPlace"><h1 style={{color:"white",marginLeft:5}}>Hồ Chí Minh</h1></div>
                            <div className="detailOfPlace"><h2 style={{color:"white"}}>Chi tiết</h2></div>
                            <div className="overlay1" ><p style={{paddingBottom:5}}>Bấm vào để xem </p></div>
                    </div>
            </div> 
            </div>
            </div>);
    }
}
export default Room_Stay_Provinces;