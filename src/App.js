import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card, Col, Row } from 'antd';
import { PageHeader } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function App(){
  const MyMenu = [
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
        Bagian Administrasi
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
        Bagian Pemasaran
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">
        Bagian Pendanaan
      </a>
    </Menu.Item>
  </Menu>
  ]

  const cardData = [
    {
      title:"Prawito",
      job:"FrontEnd Dev",
    },
    {
      title:"Handoko",
      job:"Project Manager",
    },
    {
      title:"Budi",
      job:"UI Designer",
    },
    {
      title:"Setia",
      job:"UI Designer",
    },
    {
      title:"Ani",
      job:"Web Developer",
    },
    {
      title:"Mari",
      job:"IT Analyst",
    }
  ]

  return (
    [<div className="header-wrapper">
      <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Nama Pegawai"
      subTitle="Pegawai PT Sumber Sari"
    />
    <Dropdown overlay={MyMenu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Bagian IT <DownOutlined />
        </a>
    </Dropdown>
    </div>
    ,
    
    <div className="site-card-wrapper">
    <Row gutter={16}>
      {cardData.map(data =>
        <Col span={8}>
        <Card title="Nama Pegawai" bordered={false}>
          <p className="title">{data.title}</p>
          <p>{data.job}</p>
        </Card>
        </Col>
        )}
    </Row>
    </div>]
  );
}

export default App;
