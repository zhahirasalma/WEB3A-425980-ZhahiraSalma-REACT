import React, {Component} from 'react';
import './contact.css'
import Navbar from './Navbar';

class Home extends Component{
    render(){
        return(
            [
            <Navbar/>,
            <div>
                <p>Kontak</p>
            </div>]
        );
    }
}

export default Home;