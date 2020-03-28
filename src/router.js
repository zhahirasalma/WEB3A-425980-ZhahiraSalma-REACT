import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Home from './home';


class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/profil" component={Home}/>
                <Route path="/" component={App}/>
            </Switch>
        );
    }
}
export default Router;