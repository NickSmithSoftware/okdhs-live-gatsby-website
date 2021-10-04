import React from 'react';

import NavBarLink from './navbar-link';

const NavBarLinkList = (props) => {
    return (
            <ul className="list-unstyled navbar-link-list d-lg-inline-flex flex-row p-0 m-0">
                {
                    props.links ? props.links.map((value, index) => {
                        return <NavBarLink id={`navbarlink-${index}`} to={`/${value === "Home" ? "" : value.replace(/\s/g, '')}`} styling={props.linkStyling} title={value} />
                    }) : <div />
                }
            </ul>
    )
}

export default NavBarLinkList;