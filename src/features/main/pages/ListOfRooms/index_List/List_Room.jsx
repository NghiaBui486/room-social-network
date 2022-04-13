import React from "react";
import '../scssList/listRoom.scss';
import { Select } from 'antd';
import Head from "../../../../../components/Hearder";
import BannerHouse from "../../HomePage/index_UI/BannerHouse";
import Searching from "../../HomePage/index_UI/Searching";
import { Card} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import images from "../../../images";
const { Meta } = Card;
const { Option } = Select;

class List_Room extends React.Component{
    render(){
        return (<div className="container_List">
                    <Head />
                        <BannerHouse />
                            <div style={{marginTop:50}}>
                                <Searching/>
                            </div>
                            <div className="container_ListRoom">
                                <div className="title_ListRoom">
                                    <div className="tittle_left">
                                        <h3 style={{fontWeight:'bold',color:'#660000'}}> Kết quả tìm kiếm phòng trọ</h3>
                                        <h3>Có 3,141,592 phòng trọ được tìm thấy</h3>
                                    </div>
                                    <div className="title_right">
                                        <Select defaultValue="--Tin đăng mới nhất--" style={{width:200,marginLeft:400,marginTop:13}} allowClear>
                                            <Option value="Giá từ cao đến thấp" />
                                            <Option value="Giá rẻ nhất" />
                                        </Select>
                                    </div>
                                 </div>
                        
                            <div className="contain_newsPostList">
                                    <div className ="container_CardList">
                                        <Card
                                            hoverable
                                            style={{ width: 240,height:390,border: "2px solid grey" }}
                                            cover={<img alt="example" src={images.tro1} />}
                                        >           
                                            
                                            <h4 style={{color:"red",fontSize:15,fontWeight:"bold"}}>PHÒNG TRỌ GIÁ RẺ</h4>
                                                <Meta title="Diện tích: 18m2" description="" />
                                                <div className="container_evaluate">
                                                    <div className="evaluate">
                                                        <Meta title="Đánh giá: " description="" />
                                                    </div>

                                                    <div className="evaluate">
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                    </div>
                                                </div>
                                                
                                                <div className="address">
                                                    <FontAwesomeIcon id ="add" icon={faLocationDot} style={{color:"orange"}} />
                                                    <Meta id ="add_name" title="Quận 12 - Hồ Chí Minh" description="" />
                                                </div>
                                                <div className="btn_Price">
                                                    <Button type="dashed" style={{backgroundColor:"green",color:"white",paddingRight:60,textAlign:"center",marginBottom:100}}>1.200.000 đ/tháng</Button>
                                                </div>
                                            </Card>
                                    </div>
                            </div>

                            <div className="contain_newsPostList">
                                    <div className ="container_CardList">
                                        <Card
                                            hoverable
                                            style={{ width: 240,height:390,border: "2px solid grey" }}
                                            cover={<img alt="example" src={images.tro1} />}
                                        >           
                                            
                                            <h4 style={{color:"red",fontSize:15,fontWeight:"bold"}}>PHÒNG TRỌ GIÁ RẺ</h4>
                                                <Meta title="Diện tích: 18m2" description="" />
                                                <div className="container_evaluate">
                                                    <div className="evaluate">
                                                        <Meta title="Đánh giá: " description="" />
                                                    </div>

                                                    <div className="evaluate">
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                    </div>
                                                </div>
                                                
                                                <div className="address">
                                                    <FontAwesomeIcon id ="add" icon={faLocationDot} style={{color:"orange"}} />
                                                    <Meta id ="add_name" title="Quận 12 - Hồ Chí Minh" description="" />
                                                </div>
                                                <div className="btn_Price">
                                                    <Button type="dashed" style={{backgroundColor:"green",color:"white",paddingRight:60,textAlign:"center",marginBottom:100}}>1.200.000 đ/tháng</Button>
                                                </div>
                                            </Card>
                                    </div>
                            </div>
                           
                            <div className="contain_newsPostList">
                                    <div className ="container_CardList">
                                        <Card
                                            hoverable
                                            style={{ width: 240,height:390,border: "2px solid grey" }}
                                            cover={<img alt="example" src={images.tro1} />}
                                        >           
                                            
                                            <h4 style={{color:"red",fontSize:15,fontWeight:"bold"}}>PHÒNG TRỌ GIÁ RẺ</h4>
                                                <Meta title="Diện tích: 18m2" description="" />
                                                <div className="container_evaluate">
                                                    <div className="evaluate">
                                                        <Meta title="Đánh giá: " description="" />
                                                    </div>

                                                    <div className="evaluate">
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                    </div>
                                                </div>
                                                
                                                <div className="address">
                                                    <FontAwesomeIcon id ="add" icon={faLocationDot} style={{color:"orange"}} />
                                                    <Meta id ="add_name" title="Quận 12 - Hồ Chí Minh" description="" />
                                                </div>
                                                <div className="btn_Price">
                                                    <Button type="dashed" style={{backgroundColor:"green",color:"white",paddingRight:60,textAlign:"center",marginBottom:100}}>1.200.000 đ/tháng</Button>
                                                </div>
                                            </Card>
                                    </div>
                            </div>

                            <div className="contain_newsPostList">
                                    <div className ="container_CardList">
                                        <Card
                                            hoverable
                                            style={{ width: 240,height:390,border: "2px solid grey" }}
                                            cover={<img alt="example" src={images.tro1} />}
                                        >           
                                            
                                            <h4 style={{color:"red",fontSize:15,fontWeight:"bold"}}>PHÒNG TRỌ GIÁ RẺ</h4>
                                                <Meta title="Diện tích: 18m2" description="" />
                                                <div className="container_evaluate">
                                                    <div className="evaluate">
                                                        <Meta title="Đánh giá: " description="" />
                                                    </div>

                                                    <div className="evaluate">
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                        <FontAwesomeIcon id ="star_eva" icon={faStar} style={{color:"yellow",position:"relative",bottom:22,left:75}}/>
                                                    </div>
                                                </div>
                                                
                                                <div className="address">
                                                    <FontAwesomeIcon id ="add" icon={faLocationDot} style={{color:"orange"}} />
                                                    <Meta id ="add_name" title="Quận 12 - Hồ Chí Minh" description="" />
                                                </div>
                                                <div className="btn_Price">
                                                    <Button type="dashed" style={{backgroundColor:"green",color:"white",paddingRight:60,textAlign:"center",marginBottom:100}}>1.200.000 đ/tháng</Button>
                                                </div>
                                            </Card>
                                    </div>
                            </div>
                    
                           
                        </div>
                 </div>
                 );
    }
}
export default List_Room;