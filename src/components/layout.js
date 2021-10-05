import React, {useEffect, useState} from 'react';
//import 'bootstrap/dist/js/bootstrap.min.js';
//import 'jquery/dist/jquery.min.js';

import NavBar from './navigation/navbar';
import Footer from './footer';

import not from '../functions/not';

import "../style/layout.css";


const Layout = ({ children }) => {
    const [dark, setDark] = useState("dark");
    const [datasetTheme, setDatasetTheme] = useState();
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    let scripts = undefined;


    const getScripts = async () => {
        <div>
            <script src="bootstrap/dist/js/bootstrap.min.js" />
            <script src="jquery/dist/jquery.min.js" />
        </div>
    }

    //initialization
    useEffect(() => {
        setDatasetTheme(document.documentElement.dataset.theme ? document.documentElement.dataset.theme : undefined);
        scripts = getScripts().then((value) => {
            setScriptsLoaded(true);
            return value;
        });
    }, [])

    //on theme change
    useEffect(() => {
        setDatasetTheme(dark);
        document.documentElement.dataset.theme = datasetTheme;
    }, [dark])

    return(
        <div className="layout" className="">
            {scripts === undefined || !scriptsLoaded  ? <h1>Scripts Not Loaded</h1> : scripts}
            <NavBar dark={dark} setDark={bool => setDark(not(dark))} />
            <div className="layout-content mx-auto p-4">
                { children }
            </div>
            <Footer />
        </div>
    )
};

export default Layout;