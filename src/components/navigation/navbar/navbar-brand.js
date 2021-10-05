import React from 'react';
import {Link} from 'gatsby';
import IconSwitch from '../../input/icon-switch';

const NavBarBrand = (props) => {
    return (
    <div className="pe-2 d-inline-flex align-items-center">
        <IconSwitch class="icon" onClick={props.setDark} iconClass="day" iconAltClass="night" />
        <Link to="/" className={`navbar-brand ms-2`}>
                <h1>OKDHS-Live!</h1>
        </Link>
      </div>
    )
}

export default NavBarBrand;