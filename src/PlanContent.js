import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PLANCONTENTDATA } from './Constants';
import './PlanContent.css';

const PlanContent = () => {
    return (
        <div>
            <Container>
                <Row className="includedPlanLabel">
                    <Col>Included in all plans</Col>
                </Row>
            </Container>
            <div className="largeSpacer"></div>
            <Container>
                <Row>
                    {
                        PLANCONTENTDATA.map((data, i) => (
                            <Col key={i} lg="4" sm="6" xs="12">
                                <img src={data.img} alt='img' />
                                <span className="contentTitle">{data.title}</span>
                                <div className="contentDescription">{data.description}</div>
                                <div className="mediumSpacer"></div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export {
    PlanContent
}