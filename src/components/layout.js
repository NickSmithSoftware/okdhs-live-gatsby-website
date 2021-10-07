import React, {useEffect, useState} from 'react';
import {Parallax} from 'react-parallax';

//import 'bootstrap/dist/js/bootstrap.min.js';
//import 'jquery/dist/jquery.min.js';

import NavBar from './navigation/navbar';
import Footer from './footer';

import not from '../functions/not';

import "../style/layout.css";
//import 'jquery';
//import 'bootstrap/dist/js/bootstrap.min.js';


const Layout = ({ children }) => {
    const [dark, setDark] = useState("dark");
    const [datasetTheme, setDatasetTheme] = useState();

    //initialization
    useEffect(() => {
        setDatasetTheme(document.documentElement.dataset.theme ? document.documentElement.dataset.theme : undefined);
    }, [])

    //on theme change
    useEffect(() => {
        setDatasetTheme(dark);
        document.documentElement.dataset.theme = datasetTheme;
    }, [dark])

    return(
        <div className="layout" className="d-flex flex-column justify-content-between">
            <NavBar dark={dark} setDark={bool => setDark(not(dark))} />
            <div className="layout-content mx-auto p-4">
                { children }
            </div>
            <Footer />
        </div>
    )
};

export default Layout;