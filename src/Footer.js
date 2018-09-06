import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row className="footer">
                    <Col lg='2' sm='12'>
                        Optimize for
                        <ul>
                            <li>FBA insite</li>
                            <li>Webinars and Ebooks</li>
                        </ul>
                    </Col>
                    <Col lg='2' sm='12'>Sellers</Col>
                    <Col lg='2' sm='12'>Agencies</Col>
                    <Col lg='2' sm='12'>
                        Resources
                        <ul>
                            <li>FBA insite</li>
                            <li>Webinars and Ebooks</li>
                        </ul>
                    </Col>
                    <Col lg='2' sm='12'>Company</Col>
                    <Col lg='2'><div id="freeDemoRect"><div style={{ paddingTop: '5px' }}>Get a free demo</div></div></Col>
                </Row>
            </Container>

            <div id='footerDivider'></div>

            <Container>
                <div className="footerContainer">
                    <div className="logoBx">
                        <img src='./assets/Teika Logos/TeikaLogo_H_black.svg' alt="Company logo" />
                        <ul>
                            <li>Copyright © 2015-18 teikametrics</li>
                        </ul>
                    </div>
                    <div className="termsCondBx">Privacy Policy</div>
                    <div className="termsCondBx">Terms & Conditions</div>
                    <div className="bostonBx">Made with &nbsp;<sub><img src='./assets/Footer/heart.svg' alt="heart" /></sub> in Boston</div>
                </div>
            </Container>
            <Container className="footerLogoContainer">
                <img src="./assets/Footer/socialicons.svg" alt="social media logos" />
            </Container>
            <div className="largeSpacer"></div>
        </div>
    )
}

export {
    Footer
}