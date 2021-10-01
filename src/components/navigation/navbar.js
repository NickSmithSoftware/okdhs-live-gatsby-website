import React from 'react';
import {Link} from 'gatsby';

import Toggle from '../input/toggle';

import not from '../../functions/not';

const NavBar = (props) => {
    const dark = props.dark;
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${not(dark)} bg-${not(dark)}`}>
        <div className={`container-fluid`}>
            <Link to="/" className={`navbar-brand`}>
                    OKDHS-Live!
            </Link>
            <Toggle updateParent={props.setDark}/>
          <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`} data-bs-target={`#navbarNavDropdown`} aria-controls={`navbarNavDropdown`} aria-expanded={false} aria-label={`Toggle navigation`}>
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className={`collapse navbar-collapse`} id={`navbarNavDropdown`}>
            <ul className={`navbar-nav`}>
              <li className={`nav-item`}>
                <Link to="/" className={`nav-link active`} aria-current={`page`}>Home</Link>
              </li>
              <li className={`nav-item`}>
                <Link to="/" className={`nav-link`}>Features</Link>
              </li>
              <li className={`nav-item`}>
                <Link to="/" className={`nav-link`}>Pricing</Link>
              </li>
              <li className={`nav-item dropdown`}>
                <Link to="/" className={`nav-link dropdown-toggle`} id={`navbarDropdownMenuLink`} role={`button`} data-bs-toggle={`dropdown`} aria-expanded={false}>
                  Dropdown link
                </Link>
                <ul className={`dropdown-menu`} aria-labelledby={`navbarDropdownMenuLink`}>
                  <li><Link to="/" className={`dropdown-item`}>Action</Link></li>
                  <li><Link to="/" className={`dropdown-item`}>Another action</Link></li>
                  <li><Link to="/" className={`dropdown-item`}>Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;