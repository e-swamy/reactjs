import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import SectionTitle from '../shared/SectionTitle';
import '../../assets/sass/services.scss'

export default class Service extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SectionTitleData: {
                sectionTitle: 'Service',
                sectionSubTitle: 'Services',
            }
        }
    }

    render() {

        const serviceData = [
            {
                id: 1,
                waveStyle: '',
                icon: 'bx bxs-bulb',
                title: 'Ideas',
                animateDelay: '0.2s',
                content: 'Lorem ipsum dolor sit amet consectetur, mollitia.'
            },
            {
                id: 2,
                waveStyle: 'mt-xl-5 pt-xl-5',
                icon: 'bx bxs-palette',
                title: 'UI & UX Design',
                animateDelay: '0.2s',
                content: 'Lorem ipsum dolor sit amet consectetur, mollitia.'
            },
            {
                id: 3,
                waveStyle: '',
                icon: 'bx bxs-devices',
                title: 'Web Development',
                animateDelay: '0.3s',
                content: 'Lorem ipsum dolor sit amet consectetur, mollitia.'
            },
            {
                id: 4,
                waveStyle: 'mt-xl-5 pt-xl-5',
                icon: 'bx bxs-camera',
                title: 'Photography',
                animateDelay: '0.4s',
                content: 'Lorem ipsum dolor sit amet consectetur, mollitia.'
            }
        ];

        return (
            <section id="service" className="services">
                <div className="top-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2262 305">
                        <path id="Shape 1" opacity="0.2" fill="current" d="M0 137.78C0 137.78 303 201.1 552 116.78C552 116.78 892.5 -42.39 1188 156.78C1188 156.78 1477.5 388.11 1875 272.78C1875 272.78 2151 201.1 2262 221.78L2262 0.78L0 0.78L0 137.78Z" />
                        <path id="Shape 2" opacity="0.8" fill="current" d="M0 112.78C0 112.78 303 176.1 552 91.78C552 91.78 892.5 -67.39 1188 131.78C1188 131.78 1477.5 363.11 1875 247.78C1875 247.78 2151 176.1 2262 196.78L2262 -1.22L0 -1.22L0 112.78Z" />
                    </svg>
                </div>
                <div className="service-content-block section-padding-3">
                    <Container>
                        <SectionTitle SectionTitleText={this.state.SectionTitleData} />
                        <Row>
                            {
                                serviceData.map((item, index) => {
                                    return (
                                        <Col key={index} xl={3} lg={6} md={6} sm={12} className={`${item.waveStyle} my-3 wow fadeInUp`} data-wow-offset="10" data-wow-delay={item.animateDelay}>
                                            <Card className="shadow border-0">
                                                <svg className="paint_shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334 242" width="230"><defs><linearGradient id="grd1" gradientUnits="userSpaceOnUse" x1="66.512" y1="-300.524" x2="-118.063" y2="498.959"><stop offset="0" stopColor="#01f2eb" /><stop offset="0.184" stopColor="#ff2c6d" /><stop offset="0.392" stopColor="#5aadbf" /><stop offset="0.574" stopColor="#ff2c6d" /><stop offset="0.905" stopColor="#ff2c6d" /><stop offset="1" stopColor="#ff0041" /></linearGradient></defs><path id="Shape 1" fill="url(#grd1)" opacity="0.3" d="M3 25C3 25 72 -31.89 293.5 26.55C293.5 26.55 367 44.05 314 65.05C314 65.05 237 76.89 238 181C238 181 241 256.89 195 239C195 239 165 230.89 145 149C145 149 132 86.89 93 136C93 136 82.5 152.78 89.25 182.03C89.25 182.03 94 206.78 73 196.78C73 196.78 70.67 191.3 73 186C73 186 105.33 109.63 39 69C39 69 -10 40.95 3 25Z" /></svg>
                                                <Card.Body>
                                                    <Card.Title className="my-3"><i className={item.icon} /></Card.Title>
                                                    <Card.Subtitle className="pacifico my-3">{item.title}</Card.Subtitle>
                                                    <Card.Text className="text-white-50">{item.content}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
                <div className="bottom-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2262 446">
                        <path id="Shape 3" opacity='0.2' fill='current' d="M0 66C0 66 160 163.84 374 93C374 93 722.5 -19.16 740 180C740 180 703.5 403.66 1032 289.33C1032 289.33 1234 214.22 1374 325C1374 325 1634 570.22 1822 254.22C1822 254.22 2032.5 -121.34 2262 73L2262 447L0 447L0 66Z" />
                        <path id="Shape 4" opacity='0.8' fill='current' d="M0 86C0 86 160 183.84 374 113C374 113 722.5 0.84 740 200C740 200 703.5 423.66 1032 309.33C1032 309.33 1229 238.11 1374 345C1374 345 1623 585.66 1827 284.33C1827 284.33 2040 -112.66 2262 93L2262 447L0 447L0 86Z" />
                    </svg>
                </div>
            </section>
        )
    }
}
