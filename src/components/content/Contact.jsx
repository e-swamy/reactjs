import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import WOW from 'wowjs'
import SectionTitle from '../shared/SectionTitle';
import Btns from '../shared/Btns';
import '../../assets/sass/contact.scss'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SectionTitleData: {
                sectionTitle: 'Lets Get In Touch!',
                sectionSubTitle: 'Contact Us',
            },
            btnComponent: {
                btnName: 'Send Now'
            }
        }
    }

    componentDidMount() {
        // Wow JS
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        const contactDetailsData = [
            {
                id:1,
                animateDelay: '0.3s',
                icon: 'bx bxs-phone bx-rotate-270',
                detail: '+91 - 9912345678'
            },
            {
                id:2,
                animateDelay: '0.4s',
                icon: 'bx bxs-envelope',
                detail: 'contact@yourwebsite.com'
            },
            {
                id:3,
                animateDelay: '0.5s',
                icon: 'bx bxs-map',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
        ]
        return (
            <section id="contact" className="contact_us section-padding-3">
                <Container>
                    <div className="contact_content">
                        <SectionTitle SectionTitleText={this.state.SectionTitleData} />
                        <Row>
                            {
                                contactDetailsData.map((item, index) => {
                                    return (
                                        <Col key={index} xl={4} lg={4} md={4} sm={12}>
                                            <div className="contact-icon text-center my-4 wow fadeInUp" data-wow-offset="10" data-wow-delay={item.animateDelay}>
                                                <i className={item.icon} />
                                                <p className="mt-3">{item.detail}</p>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Form className="contact-form text-left mt-4">
                            <Form.Row>
                                <Col xl={6} lg={6} md={6} className="px-xl-4 px-lg-3 wow fadeInUp" data-wow-offset="10" data-wow-delay="0.6s">
                                    <Form.Group controlId="formGroupName">
                                        <Form.Control type="text" placeholder="Name*" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Control type="email" placeholder="Email*" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPhone">
                                        <Form.Control type="phone" placeholder="Mobile" />
                                    </Form.Group>
                                </Col>
                                <Col xl={6} lg={6} md={6} className="px-xl-4 px-lg-3 wow fadeInUp" data-wow-offset="10" data-wow-delay="0.7s">
                                    <Form.Group controlId="formGroupMessage">
                                        <Form.Control as="textarea" rows="5" placeholder="Message" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupButton">
                                        <Btns btnComponent={this.state.btnComponent} />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Form>
                    </div>
                </Container>
            </section >
        )
    }
}
