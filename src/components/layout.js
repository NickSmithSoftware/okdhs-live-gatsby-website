import React, {useEffect, useState} from 'react';

import NavBar from './navigation/navbar';

import "../style/layout.css";

const Layout = ({ children }) => {
    const [dark, setDark] = useState("dark");
    const [rootDataset, setRootDataset] = useState();

    const getDarkText = (bool) => {
        return bool ? "dark" : "light";
    }

    //initialization
    useEffect(() => {
        setRootDataset(document.documentElement.dataset)
    }, [])

    //on theme change
    useEffect(() => {
        rootDataset.theme = dark;
    }, [dark])

    return(
        <div className="layout" className="overflow-hidden">
            <NavBar dark={dark} setDark={bool => setDark(getDarkText(bool))} />
            <div className="layout-content">
                { children }
            </div>
        </div>
    )
};

export default Layout;