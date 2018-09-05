import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container, Row, Col,
    Card, CardHeader, CardBody
} from 'reactstrap';
import { Plan } from './PlanConfirmationComponent';
import * as constants from './Constants';
import './RenderCard.css';

const RenderCard = (props) => {
    return (
        <Container>
            <Row>
                {
                    constants.CARDS.map((data, i) => (
                        <Col key={i} lg="3" sm="6" xs="12" id="cardSpacing">
                            <Card className="cardText">
                                <CardHeader id={!props.switched ? "monthlyBackground" : "yearlyBackground"} className="planCardTitle">
                                    {data.title}
                                </CardHeader>
                                <CardBody>

                                    <div className="planCardCharge">
                                        ${!props.switched ? data.planCharge : Math.floor(data.planCharge - 0.2 * data.planCharge)}
                                        {data.title === "Large Business" ? "+" : ""}
                                    </div>
                                    <div className="spacer"></div>
                                    <div className="perMonthLabel">per Month</div>
                                    <div className="spacer"></div>
                                    <div className="divider planCardDividerColor"></div>
                                    <div className="spacer"></div>
                                    <div className='planSavingSummary'>Up to <span id='planSavingSummaryDollar'>{data.planSave}</span> per month in advertising spend</div>
                                    <Link to={{ pathname: "/Plan/" + data.planCharge, myCustProps: { ...data, ...{ switched: props.switched } } }}>
                                        <div id={!props.switched ? "selectMonthlyBackground" : "selectYearlyBackground"} className="teikametricsRectangleBox">
                                            <span id="teikametricsLabel">{data.selectPlanText}
                                            </span>
                                        </div>
                                    </Link>

                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export {
    RenderCard,
    Plan
}