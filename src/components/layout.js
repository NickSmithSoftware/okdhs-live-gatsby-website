import React, {useEffect, useState} from 'react';

import NavBar from './navigation/navbar';

import "../style/layout.css";

const Layout = ({ children }) => {
    const [dark, setDark] = useState("dark");
    const [rootDatasetTheme, setRootDatasetTheme] = useState(document.documentElement.dataset.theme);

    const getDarkText = (bool) => {
        return bool ? "dark" : "light";
    }

    //initialization
    useEffect(() => {

    }, [])

    //on theme change
    useEffect(() => {
        setRootDatasetTheme(dark);
    }, [dark])

    return(
        <div id="layout" className="overflow-hidden">
            <NavBar dark={dark} setDark={bool => setDark(getDarkText(bool))} />
            <div id="layout-content">
                { children }
            </div>
        </div>
    )
};

export default Layout;