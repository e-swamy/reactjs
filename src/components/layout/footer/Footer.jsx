import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../../assets/sass/footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_section text-center">
                <div className="svg-border-rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                </div>
                <div className="footer py-5">
                    <Container>
                        <Row>
                            <Col xl={12} lg={12} md={12}>
                                <ul className="list-inline social-buttons p-0 mb-4">
                                    <li className="list-inline-item wow fadeInUp" data-wow-offset="10" data-wow-delay="0.6s">
                                        <a className="twitter" href="https://twitter.com/login" target="new">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item wow fadeInUp" data-wow-offset="10" data-wow-delay="0.8s">
                                        <a className="facebook" href="https://en-gb.facebook.com/login/" target="new">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item wow fadeInUp" data-wow-offset="10" data-wow-delay="1s">
                                        <a className="linkedin" href="https://www.linkedin.com/uas/login" target="new">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item wow fadeInUp" data-wow-offset="10" data-wow-delay="1.2s">
                                        <a className="google" href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="new">
                                            <i className='bx bxl-google'></i>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col xl={12} lg={12} md={12}><p className="text-white-50">&copy; 2021 All rights reserved and made with  <i className='bx bx-heart beat'></i> by <a href="/" className="text-white">Swamy</a> </p></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
