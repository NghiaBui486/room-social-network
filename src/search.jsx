import { Select, Rate } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search.css';

const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


function Search() {
  return (
    <div className="search">
    <div className="title_seatch">
        <h3 style={{fontFamily:"Times New Roman",color:"#660000",fontSize:20}}>Tìm kiếm nhanh</h3>
    </div>
    <div className="search2" style={{position: 'relative', bottom:10,left:30,top:2}}>
    <Select defaultValue="Giá" style={{ width: 140}}  allowClear>
      <Option value="1.000.000VND"/>
    </Select>
    <Select defaultValue="Tỉnh, TP" style={{ width: 150 }}  allowClear>
      <Option value="Quy Nhơn"/>
    </Select>
    <Select defaultValue="quan_huyen" style={{ width: 180 }}  allowClear>
      <Option value="quan_huyen">Quận 1</Option>
    </Select>
    <Select defaultValue="duong_pho" style={{ width: 180}}  allowClear>
      <Option value="duong_pho">Nguyễn Thị Định</Option>
    </Select>
    <Select defaultValue="chu_tro" style={{ width: 180 }}  allowClear>
      <Option value="chu_tro">Nguyễn Văn A</Option>
    </Select>
    <Select defaultValue="dien_tich" style={{ width: 100}}  allowClear>
      <Option value="dien_tich">20m2</Option>
    </Select>
    <Select defaultValue="danh_gia" style={{ width: 190}}  allowClear>
      <Option value="danh_gia">
      <Rate/>
      </Option>
    </Select>
    <Space>
    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    </Space>
    <Button className='btnsearch' icon={<SearchOutlined />}>
      Search
    </Button>
    </div>
    </div>
  );
}
export default Search;