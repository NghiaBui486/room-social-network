import React from "react";
import '../scss_UI/newPost.scss';
import { Card} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import images from "../../../images";
const { Meta } = Card;

class NewPost extends React.Component{
    render(){
        return(<div className="Contain_Post">
            <div className="tittle_New">
                <h3 style={{fontWeight:"bold",fontFamily:"Times new romans",fontSize:25,color:"#660000"}}>Tin mới đăng</h3>
            </div>
            <div className="contain_newsPost">
                <div className ="container_Card">
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


                <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro2} />}
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

                <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro3} />}
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

                <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro4} />}
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

                <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro4} />}
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

                <div className ="container_Card">
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

                <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro5} />}
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

                <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro6} />}
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
                
            
                <div className="btn_SeeAll">
                    <Button type="primary" danger style={{backgroundColor:"blue",border:"blue", position:"relative",bottom:967,textAlign:"center",left:"45%"}}>
                        Xem tất cả
                    </Button>
                </div>
             </div>

             <div className="hot_news">
                    <div className="tittle_New">
                                <h3 style={{fontWeight:"bold",fontFamily:"Times new romans",fontSize:25,color:"#660000"}}>Tin nổi bật</h3>
                    </div>
                 <div className="hotCard">
                     <div className ="container_Card">
                            <Card
                                hoverable
                                style={{ width: 240,height:390,border: "2px solid grey" }}
                                cover={<img alt="example" src={images.tro6} />}
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

                    <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro6} />}
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

                    <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro6} />}
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

                     <div className ="container_Card">
                        <Card
                            hoverable
                            style={{ width: 240,height:390,border: "2px solid grey" }}
                            cover={<img alt="example" src={images.tro6} />}
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

             
        </div>);
    }
}
export default NewPost;