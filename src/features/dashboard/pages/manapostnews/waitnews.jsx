import { Table , Popconfirm } from 'antd';
import React from 'react';
import { DeleteOutlined, SearchOutlined , FormOutlined } from '@ant-design/icons';
const columns = [
  {
    title: 'Tiêu đề',
    dataIndex: 'name',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
  {
    title: 'Giá',
    dataIndex: 'price',
  },
  {
    title: 'Ngày đăng',
    dataIndex: 'date',
  },
  {
    title: 'Xóa',
    dataIndex: 'operation',
    render: (_, record) => {
      return (
        <Popconfirm title="bạn chắc chắn xóa?">
            <a><DeleteOutlined /></a>
        </Popconfirm> 
      )    
    }
    
   },
   {
    title: 'Sửa',
    dataIndex: 'edit',
    render: (_, record) => {
      return (
        <Popconfirm title="bạn chắc chắn sửa?">
            <a><FormOutlined /></a>
        </Popconfirm> 
      )    
    }
   }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Đang chờ ${i}`,
    price: 32,
    address: `Quy Nhon, Binh Dinh ${i}`,
    date : `20/12/2021 ${i}`

  });
}

class Waitnews extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}

export default Waitnews;