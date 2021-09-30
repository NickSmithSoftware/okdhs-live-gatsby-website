import React from 'react';

const NavBarLink = (props) => {
    return (
        <li className="nav-item">
          <Link to={props.to} className={"nav-link active " + props.styling} aria-current="page">{props.title}</Link>
        </li>
    )
}

export default NavBarLink;