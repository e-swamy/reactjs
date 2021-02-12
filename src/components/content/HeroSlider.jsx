import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ParticlesJs from '../../components/shared/ParticlesJs'
import WOW from 'wowjs'
import '../../assets/sass/heroslider.scss'

export default class HeroSlider extends Component {
    componentDidMount() {
        // Wow JS
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section id="heroslider" className="heroslider">
                <ParticlesJs />
                <Container>
                    <Row className="align-items-center">
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={12}>
                            <div className="heroslider_content text-center wow fadeInUp" data-wow-offset="10" data-wow-delay="0.2s">
                                <h1>Hi, I'm <span className="myname"> Swamy</span></h1>
                                <p className="text-white-50">Obviously I'm a frontend web developer From India. UI and Web Developer with over 5 years of experience. I can provide clean code and pixel perfect design. I also make website more &amp; more interactive with web animations.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ul className="verticle_line">
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </section>
        )
    }
}
