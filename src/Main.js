import React, {Component} from 'react';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import Home from './home'
import Kontak from './contact';

class Main extends Component{
    render(){
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/profil" component={Home}/>
                    <Route path="/divisi-it" component={App}/>
                    <Route path="/kontak" component={Kontak}/>
                </Switch>
            </Router>
        );
    }
}

export default Main;

