import React from 'react';
import { Typography} from 'antd';
import 'antd/dist/antd.css';
import './sitecard.css';

const { Link } = Typography;

function City() {
    return(
       <div className='space-city-ui'>
            <div className='space-city1' style={{textAlign:'center',fontSize:20,color:'#ad0c0c',fontWeight:'bold',marginTop:40}}>
                Khám phá các phòng trọ ở các thành phố lớn
            </div>
            <div className='space-city2' style={{textAlign:'center',fontSize:17}}>
                Tìm kiếm phòng trọ trong thành phố lớn và các tỉnh thành liên quan
            </div>
            <div className='content'>
                <div className='item1'>
                    <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                    <h2>Hà Nội</h2>
                    <Link href="#" target="_blank" style={{position: 'absolute',top:380,left: 180,fontSize:20,color:'aliceblue'}}>
                        Chi tiết 
                    </Link>
                </div>
                <div className='content2'>
                <div className='item2'>
                    <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                    <h2>Hải Phòng</h2>
                    <Link href="#" target="_blank" style={{position: 'absolute',top:170,left: 240,fontSize:20,color:'aliceblue'}}>
                        Chi tiết 
                    </Link>
                </div>
                <div className='item3'>
                    <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                    <h2>Hồ Chí Minh</h2>
                    <Link href="#" target="_blank" style={{position: 'absolute',top:180,left: 240,fontSize:20,color:'aliceblue'}}>
                        Chi tiết 
                    </Link>
                    </div>
                </div>
                <div className='item4'>
                    <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                    <h2>Hồ Chí Minh</h2>
                    <Link href="#" target="_blank" style={{position: 'absolute',top:380,left: 190,fontSize:20,color:'aliceblue'}}>
                        Chi tiết 
                    </Link>
                    </div>
                    <div className='content3'>
                    <div className='item5'>
                        <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                        <h2>Hải Phòng</h2>
                        <Link href="#" target="_blank" style={{position: 'absolute',top:170,left: 240,fontSize:20,color:'aliceblue'}}>
                            Chi tiết 
                        </Link>
                    </div>
                    <div className='item6'>
                        <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                        <h2>Hồ Chí Minh</h2>
                        <Link href="#" target="_blank" style={{position: 'absolute',top:180,left: 240,fontSize:20,color:'aliceblue'}}>
                            Chi tiết 
                        </Link>
                        </div>
                    </div>
                    <div className='item7'>
                    <img src="https://dulichkhampha24.com/wp-content/uploads/2019/09/kinh-nghiem-du-lich-Ha-Noi-1.jpg"/>
                    <h2>Hà Nội</h2>
                    <Link href="#" target="_blank" style={{position: 'absolute',top:380,left: 180,fontSize:20,color:'aliceblue'}}>
                        Chi tiết 
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default City;