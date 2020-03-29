import React, {Component} from 'react';
import './contact.css'
import Navbar from './Navbar';
import { Descriptions } from 'antd';

class Home extends Component{
    render(){
        return(
            [
            <Navbar/>,
            <div>
                <Descriptions className="contact" title="PT Inovasi" bordered>
                    <Descriptions.Item label="Nama Perusahaan">PT Inovasi</Descriptions.Item>
                    <Descriptions.Item label="Telepon">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Email">creative@inovasi.com</Descriptions.Item>
                    <Descriptions.Item label="Negara">Indonesia</Descriptions.Item>
                    <Descriptions.Item label="Alamat">
                    Jl. Persatuan, Indonesia
                    </Descriptions.Item>
                </Descriptions>,
            </div>]
        );
    }
}

export default Home;