import React, {Component} from 'react';
import './App.css';
import { PageHeader } from 'antd';
import CardName from './CardName/CardName';
import Navbar from './Navbar';

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
    return (
      [
      
      <Navbar/>,
      <div className="header-wrapper">
        <PageHeader
        className="site-page-header"
        title="Divisi IT PT Inovasi"
      />
      </div>,

      <CardName onTotalChange={(value) => this.handleTotalChange(value)}/>]
    );
  }
}

export default App;
