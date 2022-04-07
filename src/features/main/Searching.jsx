import React from "react";
import './search.scss';
import { Select, Typography } from 'antd';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
class Searching extends React.Component {
    render(){
      
        return(
            <div className="search">
                <div className="title_seatch">
                    <h3 style={{fontFamily:"Times New Roman",color:"#660000",fontSize:20}}>Tìm kiếm nhanh</h3>
                </div>
                <div className="sub_search">
                    <div className="searches">
                         <Select defaultValue="Giá" allowClear>
                        <Option value="">a</Option>
                        <Option value="">b</Option>
                        <Option value="">c</Option>
                        </Select>
                    </div>

                    <div className="searches">
                         <Select defaultValue="Tỉnh" allowClear>
                        <Option value=""></Option>
                        </Select>
                    </div>

                    <div className="searches">
                         <Select defaultValue="Quận, huyện"  allowClear>
                        <Option value=""></Option>
                        </Select>
                    </div>

                    <div className="searches">
                         <Select defaultValue="Phường, xã" allowClear>
                        <Option value=""></Option>
                        </Select>
                    </div>

                    <div className="searches">
                         <Select defaultValue="Chủ trọ" allowClear>
                        <Option value=""></Option>
                        </Select>
                    </div>

                    <div className="searches">
                         <Select defaultValue="Diện tích"  allowClear>
                        <Option value=""></Option>
                        </Select>
                    </div>

                    <div className="searches">
                         <Select defaultValue="Đánh giá" allowClear>
                        <Option value=""></Option>
                        </Select>
                    </div>
                        

                    <div className="searches">
                    <Space>
                        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                    </Space>
                    </div>


                    <div className="btn_search">
                    <Button type="primary"  icon={<SearchOutlined />}>
                       Tìm kiếm
                     </Button>
                    </div>
                        
                        
                
                   
                </div>
            </div>
        );
    }
}

export default Searching;