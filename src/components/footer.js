import React from 'react';

const Footer = (props) => {
    return (
        <div className="text-center footer py-3 d-flex justify-content-center">
            <div className="footer-card my-3 w-50 rounded p-3">
                <p className="text-center">Oklahoma Department of Human Services</p>
                <div className="text-center">
                    Mailing address: <br />
                    OKDHSLive! <br />
                    P.O. Box 2700 Norman, OK 73070 <br />
                    (405) 522 - 5050
                </div>
            </div>
        </div>
    )
}

export default Footer;