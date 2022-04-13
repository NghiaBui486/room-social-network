import React from "react";
import '../scssList/listRoom.scss';
import Head from "../../../../../components/Hearder";
import BannerHouse from "../../HomePage/index_UI/BannerHouse";
import Searching from "../../HomePage/index_UI/Searching";
class List_Room extends React.Component{
    render(){
        return (<div className="container_List">
                    <Head />
                        <BannerHouse />
                            <div style={{marginTop:200}}>
                                <Searching/>
                            </div>
                            <div className="container_ListRoom">
                                <div className="title_ListRoom">
                                    <div className="tittle_left">
                                        <h3 style={{fontWeight:'bold'}}> Kết quả tìm kiếm phòng trọ</h3>
                                        <h3>Có 3,141,592 phòng trọ được tìm thấy</h3>
                                    </div>
                                    <div className="title_right"></div>
                                </div>
                            </div>
                 </div>
                 );
    }
}
export default List_Room;