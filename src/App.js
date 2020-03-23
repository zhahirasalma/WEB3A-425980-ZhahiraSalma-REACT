import React, {Component} from 'react';
import './App.css';
import { Card, Col, Row } from 'antd';
import { PageHeader } from 'antd';
import { Statistic } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class App extends Component{
  state={
    total: 50,
    totalmin: 40,
    totalsuccess: 0
  }

  handleClickPositive = () => {
    this.setState({
      total: this.state.total + 1,
      totalsuccess: this.state.totalsuccess + 1
    })
  }

  handleClickNegative = () => {
    this.setState({
      totalmin: this.state.totalmin + 1
    })
  }

  render(){
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
        },
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
        }
      ]
    return (
      [<div className="header-wrapper">
        <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Data Pegawai"
        subTitle="PT Sumber Sari"
      />
      <Dropdown overlay={MyMenu}>
      <React.Fragment>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} >
            Bagian IT <DownOutlined />
          </a>
        </React.Fragment>
      </Dropdown>
      </div>
      ,
      
      <div className="site-card-wrapper">
      <Row gutter={16}>
        {cardData.map(data =>
          <Col span={8}>
          <Card title="Nama Pegawai" bordered={false}>
            
            <p className="title">{data.title}</p>
            <p className="subtitle">{data.job}</p>
            <p><Button className="button" shape="round" icon={<LikeOutlined />} onClick={this.handleClickPositive}></Button>
            <Button className="button" shape="round" icon={<DislikeOutlined />} onClick={this.handleClickNegative}></Button></p>
            <p className="statistik"><Statistic title="Disukai" value={this.state.total} /></p>
            <p className="statistik"><Statistic title="Tidak Disukai" value={this.state.totalmin} /></p>
            <p className="statistika"><Statistic title="Statistik Keberhasilan" value={this.state.totalsuccess} suffix="/ 100" /></p>
          </Card>
          </Col>
          )}
      </Row>
      </div>]
    );
  }
}

export default App;
