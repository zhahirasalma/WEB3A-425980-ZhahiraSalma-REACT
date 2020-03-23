import React, {Component} from 'react';
import './App.css';
import { PageHeader } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CardName from './CardName/CardName';

class App extends Component{
  state={
    total: 50,
    totalmin: 40,
    totalsuccess: 0
  }

  handleTotalChange = (newValue) => {
    this.setState({
      total: newValue,
      totalmin: newValue,
      totalsuccess: newValue
    });
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
  
    return (
      [
      <div className="header-wrapper">
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
      </div>,

      <CardName onTotalChange={(value) => this.handleTotalChange(value)}/>]
    );
  }
}

export default App;
