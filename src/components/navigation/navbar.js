import React from 'react';
import {Link} from 'gatsby';

import not from '../../functions/not';
import NavBarBrand from './navbar/navbar-brand';
import NavBarLinkList from './navbar/navbar-link-list';

const NavBar = (props) => {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${not(props.dark)} bg-${not(props.dark)}`}>
        <div className={`container-fluid`}>
          <NavBarBrand setDark={props.setDark} color={props.dark} />
          <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`} data-bs-target={`#navbarNavDropdown`} aria-controls={`navbarNavDropdown`} aria-expanded={false} aria-label={`Toggle navigation`}>
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <NavBarLinkList className={`d-inline-flex align-items-center collapse navbar-collapse`} id={`navbarNavDropdown`} links={["Home", "Benefits", "Contact Us", "Log In"]} />
        </div>
      </nav>
    )
}

export default NavBar;