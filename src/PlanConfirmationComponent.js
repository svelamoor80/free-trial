import React from 'react';
import { Link } from 'react-router-dom';
import './PlanConfirmationComponent.css';
const Plan = (props) => {
    const myCustProps = props.location.myCustProps,
        switched = myCustProps.switched,
        planCharge = !switched ? myCustProps.planCharge : Math.floor(parseInt(myCustProps.planCharge, 10) - 0.2 * parseInt(myCustProps.planCharge, 10)),
        title = myCustProps.title,
        subscriptionPlan = !switched ? 'Monthly' : 'Yearly';
    console.log(JSON.stringify(props));
    return (
        <div className="planConfirmBody">
            <div>Thank you. You have selected {subscriptionPlan} plan of {title} at ${planCharge}.</div>
            <Link to={{ pathname: "/" }} className="teikametricsRectangleBox"><span id="teikametricsLabel">Go Back</span></Link>
        </div>
    )
};

export {
    Plan
}