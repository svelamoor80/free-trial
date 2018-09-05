import React from 'react';
import Switch from 'react-toggle-switch';
import { Container } from 'reactstrap';
import './SwitchPlan.css';

const SwitchPlan = (props) => {
    return (
        <Container>
            <div className="switchPlanContainer">
                <div className="prefix"></div>
                <div id="selectLbl" >
                    <div id="priceStructLabel">OUR SIMPLE PRICING STRUCTURE</div>
                    <div className="mediumSpacer"></div>
                    <div id="planMatchLabel">Select the plan that matches your business</div>
                </div>
                <div className="mediumSpacer"></div>
                <div className="toggleContainer">
                    <div className="planLbl" id={!props.switched ? "active" : ""}>Monthly Plan</div>
                    <div className="switchButton"><Switch onClick={props.toggleSwitch} on={props.switched} /></div>
                    <div className="planLbl" id={props.switched ? "active" : ""}> Yearly Plan - Save 20%</div>
                </div>

            </div>
        </Container>
    )
}

export default SwitchPlan;