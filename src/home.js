import React, {Component} from 'react';
import './home.css'
import Navbar from './Navbar';
import profil from './images/profil.jpg';
import profil2 from './images/profil2.jpg';
import profil3 from './images/profil3.jpg';
import { Carousel } from 'antd';

class Home extends Component{

    render(){
        return(
            [
            <Navbar/>,
            <div className="title-profil" >PT INOVASI
            <Carousel className="carousel" effect="fade">
                <div>
                    <img src={profil2}></img>
                </div>
                <div>
                    <img src={profil}></img>
                 </div>
                <div>
                    <img src={profil3}></img>
                </div>
            </Carousel>
            </div>,
            <div >
                <p className="desc">PT Inovasi adalah perusahaan yang bergerak di bidang arsitektur dan mengedepankan
                inovasi dalam setiap detail pengerjaannya. Misi dari PT Inovasi adalah mendayakembangkan segala bentuk
                karya arsitektur menjadi sebuah seni yang berestetika tinggi. PT Inovasi telah bergerak lebih dari 10
                tahun dan mengembangkan lebih dari 50 karya yang dapat dinikmati hasilnya di berbagai penjuru Indonesia. </p>
            </div>]
        );
    }
}


export default Home;