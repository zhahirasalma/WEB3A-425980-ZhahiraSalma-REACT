import { Menu } from 'antd';
import React, {Component} from 'react';
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
        <Menu.Item>
          <Link to="/divisi-it">Pegawai</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="/kontak">Kontak</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;