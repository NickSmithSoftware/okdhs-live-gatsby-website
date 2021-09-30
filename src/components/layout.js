import React from 'react';

import {NavBar} from './navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/main.css";

const Layout = ({ children }) => {
    return(
        <div id="layout" className="overflow-hidden">
            <NavBar />
            <div id="layout-content">
                { children }
            </div>
        </div>
    )
};