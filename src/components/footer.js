import React from 'react';

const Footer = (props) => {
    return (
        <div className="text-center footer pb-3 d-flex justify-content-center px-3">
            <div className="card footer-card my-3 w-100 rounded-pill p-3 text-center footer-border">
                <div className="card-body rounded-pill">
                    <h5 className="card-title">Oklahoma Department of Human Services</h5>
                    <div className="card-text fw-bold">
                        Mailing address: <br />
                        OKDHSLive! <br />
                        P.O. Box 2700 Norman, OK 73070 <br />
                        (405) 522 - 5050
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;