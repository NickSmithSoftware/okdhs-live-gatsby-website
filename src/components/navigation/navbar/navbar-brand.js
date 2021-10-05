import React from 'react';
import {Link} from 'gatsby';
import IconSwitch from '../../input/icon-switch';

const NavBarBrand = (props) => {
    return (
    <div className="pe-2 d-inline-flex align-items-center">
        <IconSwitch class="icon" onClick={props.setDark} iconClass="day" iconAltClass="night" />
        <Link to="/" className={`navbar-brand me-0 my-0 ms-2 p-0`}>
                <h3>OKDHS-Live!</h3>
        </Link>
      </div>
    )
}

export default NavBarBrand;