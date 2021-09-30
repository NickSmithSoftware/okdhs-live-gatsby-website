import React from 'react';

import NavBarLink from './navbar-link';

const NavBarLinkList = (props) => {
    const links = props.links.map((value, index) => {
        
        return <NavBarLink id={`${props.name}-${props.value}`} to={value} styling={props.linkStyling} title={value} />
    })
    return (
        {links}
    )
}

export default NavBarLinkList;