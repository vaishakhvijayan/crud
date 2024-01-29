import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import {BrowserRouter,Routes} from 'react-router-dom';

import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import './login.css';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/dashboard' element ={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
