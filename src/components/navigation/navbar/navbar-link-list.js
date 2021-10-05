import React from 'react';

import NavBarLink from './navbar-link';

const NavBarLinkList = (props) => {
    return (
        <div className={`d-inline-flex align-items-center collapse navbar-collapse`} id={`navbarNavDropdown`}>
            <ul className="list-unstyled navbar-link-list d-lg-inline-flex flex-row p-0 m-0">
                {
                    props.links ? props.links.map((value, index) => {
                        return <NavBarLink className="my-3" id={`navbarlink-${index}`} to={`/${value === "Home" ? "" : value.replace(/\s/g, '')}`} styling={props.linkStyling} title={value} />
                    }) : <div />
                }
            </ul>
        </div>
    )
}

export default NavBarLinkList;