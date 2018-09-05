import React from 'react';
import { Link } from 'react-router-dom';
import './AgencyContainer.css';

const AgencyContainer = (props) => {
    return (
        <div className="agencyContainer">
            <div className="mediumSpacer"></div>
            <div id="agencyLabel"> Are you an agency?</div>
            <div id="helpLabel">We'd love to talk with you about our Sponsored Products needs!</div>
            <div className="largeSpacer"></div>
            <Link style={{ textDecoration: 'none' }} to="/contact">
                <div id={!props.switched ? "selectMonthlyBackground" : "selectYearlyBackground"} className="teikametricsRectangleBox">
                    <span id="teikametricsLabel">Contact us</span>
                    <span id="contactArrow">
                        <img alt="blue_arrow" src={!props.switched ? "./assets/Arrows/blue_arrow.svg" : "./assets/Arrows/purple_arrow.svg"} />
                    </span>
                </div>
            </Link>
            <div className="largeSpacer"></div>
        </div>
    )
}

export {
    AgencyContainer
}