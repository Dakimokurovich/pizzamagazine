import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route} from 'react-router-dom';
import WithRestoService from '../hoc/with-resto-service';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Route path='/' component={MainPage} exact/>
            <Route path='/menu' component={MainPage}/>
            <Route path='/basket' component={CartPage}/>
        </div>
    )
}

export default WithRestoService()(App);