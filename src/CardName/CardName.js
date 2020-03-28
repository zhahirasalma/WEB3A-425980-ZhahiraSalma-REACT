import React, {Component} from 'react';
import './CardName.css';
import { Card, Col, Row } from 'antd';
import { Statistic } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Button } from 'antd';

class CardData extends Component{
  state={
    total: 50,
    totalmin: 40,
    totalsuccess: 0
  }

  handleTotalChange = (newValue) => {
    this.props.onTotalChange(newValue)
  }

  handleClickPositive = () => {
    this.setState({
      total: this.state.total + 1,
      totalsuccess: this.state.totalsuccess + 1
    }, () => {
      this.handleTotalChange(this.state.total, this.state.totalsuccess);
    })
  }

  handleClickNegative = () => {
    this.setState({
      totalmin: this.state.totalmin + 1
    }, () => {
      this.handleTotalChange(this.state.totalmin);
    })
  }

  render(){
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
      </div>//]
    );
  }
}

export default CardData;
