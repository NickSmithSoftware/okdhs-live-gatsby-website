import React from 'react';
import {Link} from 'gatsby';

const Card = (props) => {
    return (
        <div className={`card text-start rounded text-start m-3`}>
            <div className="card-header rounded-top text-light">
                {props.header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.children}
                </p>
                {props.link ? <Link className="btn rounded-pill btn-link" to={`/${props.link}`}>{props.link}</Link> : <div />}
            </div>
        </div>
    )
}

export default Card;