import { Menu } from 'antd';
import React, {Component} from 'react';
import {
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Navbar.css'

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu className="menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item>
          
          <Link to="/profil">Profil</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              
              Pegawai
            </span>
          }
        >
          <Menu.ItemGroup title="Data Pegawai">
            <Menu.Item key="setting:1"><Link to="/divisi-it"></Link>Divisi IT</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="mail">
          
          <Link to="/kontak">Kontak</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;