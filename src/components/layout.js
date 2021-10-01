import React, {useEffect, useState} from 'react';

import NavBar from './navigation/navbar';

import "../style/layout.css";

const Layout = ({ children }) => {
    const [dark, setDark] = useState("dark");
    const [rootDatasetTheme, setRootDatasetTheme] = useState();

    const getDarkText = (bool) => {
        return bool ? "dark" : "light";
    }

    //initialization
    useEffect(() => {
        setRootDatasetTheme(document.documentElement.dataset.theme)
    }, [])

    //on theme change
    useEffect(() => {
        setRootDatasetTheme(dark);
    }, [dark])

    return(
        <div className="layout" className="overflow-hidden">
            <NavBar dark={dark} setDark={bool => setDark(getDarkText(bool))} />
            <div id="layout-content">
                { children }
            </div>
        </div>
    )
};

export default Layout;