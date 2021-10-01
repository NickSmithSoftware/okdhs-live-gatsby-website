import React, {useEffect, useState} from 'react';

import NavBar from './navigation/navbar';

import "../style/layout.css";

const rootDataset = document.documentElement.dataset;

const Layout = ({ children }) => {
    const [dark, setDark] = useState("dark");

    const getDarkText = (bool) => {
        return bool ? "dark" : "light";
    }

    useEffect(() => {
        rootDataset.theme = dark;
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