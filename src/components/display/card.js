import React from 'react';
import {Link} from 'gatsby';

const formatLink = (link) => {
    return link.replace(' ', '').toLowerCase();
}

const Card = (props) => {
    return (
        <div className={`custom-shadow card text-start rounded text-start h-100`}>
            <div className="card-header rounded-top">
                {props.header}
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.children}
                </p>
                {props.link ? <Link className="btn rounded-pill btn-link card-link" to={`/${formatLink(props.link)}`}>{props.link}</Link> : <div />}
            </div>
        </div>
    )
}

export default Card;