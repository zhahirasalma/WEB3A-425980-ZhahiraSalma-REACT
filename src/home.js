import React, {Component} from 'react';
import './home.css'
import Navbar from './Navbar';
import profil from './images/profil.jpg';

class Home extends Component{

    render(){
        return(
            [
            <Navbar/>,
            <div className="title-profil">PT INOVASI</div>,
            <div >
                <img src={profil}></img>
                <p className="desc">PT Inovasi adalah perusahaan yang bergerak di bidang arsitektur dan mengedepankan
                inovasi dalam setiap detail pengerjaannya.</p>
            </div>]
        );
    }
}

export default Home;