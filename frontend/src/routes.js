import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Sobre from './Pages/Sobre';
import Footer from './Footer/index';

export default function Routes() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/profile" component = {Profile} />
                <Route exact path = "/sobre" component = {Sobre} />

            </Switch>
            <Footer />
        </BrowserRouter>
    );
}