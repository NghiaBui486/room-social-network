import { Switch } from "antd"
import { useEffect, useState } from "react"
import Approvednews from './approvednews'
import Violatenews from './violatenews'
import Waitnews from './waitnews'
import "./Manapostnews.css"
import React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckCircleOutlined,CloseSquareOutlined,ClockCircleOutlined,FormOutlined } from '@ant-design/icons';
import { Input,Table } from 'antd';
import { Tabs, Radio } from 'antd';
const { Search } = Input;
const onSearch = value => console.log(value);
const { TabPane } = Tabs;

class Manapostnews extends React.Component {
    state = { size: 'small' };
  
    onChange = e => {
      this.setState({ size: e.target.value });
    };
  
    render() {
      const { size } = this.state;
      return (
        <div className="mannews">
            <h3>Quản lý đăng tin</h3>
          <Tabs defaultActiveKey="1" type="card" size={size}>
            <TabPane tab= {<span> <CheckCircleOutlined/> Đã duyệt</span>} key="1">
              <Approvednews></Approvednews>
            </TabPane>
            <TabPane tab={<span><ClockCircleOutlined/>Đang chờ duyệt</span>} key="2">
              <Waitnews></Waitnews>
            </TabPane>
            <TabPane tab={<span><CloseSquareOutlined />Vi phạm</span>} key="3">
              <Violatenews></Violatenews>
            </TabPane>
          </Tabs>
        </div>
      );
    }
  }
  
export default Manapostnews;

// function Manapostnews() {

//     return (
//         <>
            
//             { trueFalse ? <PostWait/> : <Post/> }
//         </>
//     ) 
// }

// export default Manapostnews;




// import "./Manapostnews.css"
// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import { CheckCircleOutlined,CloseSquareOutlined,ClockCircleOutlined,FormOutlined } from '@ant-design/icons';
// import { Input,Table } from 'antd';
// import { Tabs, Radio } from 'antd';
// const { Search } = Input;
// const onSearch = value => console.log(value);
// const { TabPane } = Tabs;
// class Manapostnews extends React.Component {
//     state = { size: 'small' };
  
//     onChange = e => {
//       this.setState({ size: e.target.value });
//     };
  
//     render() {
//       const { size } = this.state;
//       return (
//         <div className="mannews">
//             <h3>Quản lý đăng tin</h3>
//           <Tabs defaultActiveKey="1" type="card" size={size}>
//             <TabPane tab= {<span> <CheckCircleOutlined/> Đã duyệt</span>} key="1">
//               Content of card tab 1
//             </TabPane>
//             <TabPane tab={<span><ClockCircleOutlined/>Đang chờ duyệt</span>} key="2">
//               Content of card tab 2
//             </TabPane>
//             <TabPane tab={<span><CloseSquareOutlined />Vi phạm</span>} key="3">
//               Content of card tab 3
//             </TabPane>
//           </Tabs>
//         </div>
//       );
//     }
//   }
  
//   export default Manapostnews;
// const Manapostnews = () => {
//     return ( 
//     <div className="manager">
//                     <h3>Quản lý tin đăng</h3>
//                         <div className='manager-new' style={{height:400,width:800,marginLeft:300}}> 
//                             <div id="f1">
//                                 <select id="sele">
//                                         <option value="0">Tất cả tin đã đăng</option>
//                                         <option value="1">Khách hàng</option>
//                                 </select>
//                                 <Search placeholder="input search text" 
//                             onSearch={onSearch} 
//                             style={{ width: 200,marginLeft:100,marginTop:4 }} 
//                             />
//                             </div>
//                             <h6 style={{marginLeft:-300,fontSize: 15,marginTop:10}}>Có 3 tin đăng được tìm thấy</h6>
//                             <table className="table" >
//                                 <thead className="thead-dark" >
//                                     <tr >
//                                     <th scope="col">Mã đăng tin</th>
//                                     <th scope="col">Tiêu đề</th>
//                                     <th scope="col">Trạng thái</th>
//                                     <th scope="col">Ngày đăng</th>
//                                     <th scope="col">Xứ lý</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <th scope="row">A010101</th>
//                                         <td>Thuê phòng trọ</td>
//                                         <td id="sttv"><CheckCircleOutlined /></td>
//                                         <td>04/04/2021</td>
//                                         <td><FormOutlined /></td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="row">A749292</th>
//                                         <td>Thuê nguyên</td>
//                                         <td id="sttx"><CloseSquareOutlined /></td>
//                                         <td>01/01/2022</td>
//                                         <td><FormOutlined /></td>
//                                     </tr>
//                                     <tr>
//                                         <th scope="row">A024497</th>
//                                         <td>Tìm người ở</td>
//                                         <td id="stto"><ClockCircleOutlined /></td>
//                                         <td>05/08/2022</td>
//                                         <td><FormOutlined /></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <br></br>
//                 </div>
                
                                 
//      );
// }
 
// export default Manapostnews;