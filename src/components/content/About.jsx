import React, { Component } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from 'wowjs'
import SectionTitle from '../shared/SectionTitle';
import Btns from '../shared/Btns';
import '../../assets/sass/about.scss'
import aboutImg from '../../assets/images/about-img.svg'

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SectionTitleData: {
                sectionTitle: 'Swamy',
                sectionSubTitle: 'About Us',
            },
            btnComponent: {
                btnName: 'Download CV'
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
        var settings = {
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 6000,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const personalInfoData = [
            {
                id: 1,
                title: 'Name',
                description: 'Swamy'
            },
            {
                id: 2,
                title: 'Nationality',
                description: 'Indian'
            },
            {
                id: 3,
                title: 'Languages',
                description: 'English, Telugu'
            },
            {
                id: 4,
                title: 'Address',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                id: 4,
                title: 'Freelance',
                description: 'Available'
            }
        ]
        const OverViewData = [
            {
                id: 1,
                icon: 'bx bx-laugh',
                overViewTitle: 'Happy Clients',
                animateDelay: '0.2s'
            },
            {
                id: 2,
                icon: 'bx bx-file',
                overViewTitle: 'Projects Done',
                animateDelay: '0.3s'
            },
            {
                id: 3,
                icon: 'bx bx-medal',
                overViewTitle: 'Awards',
                animateDelay: '0.4s'
            }
        ];
        const OverViewSliderData = [
            {
                id: 1,
                icon: 'bx bxs-quote-left',
                quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                authorname: 'Srinu'
            },
            {
                id: 2,
                icon: 'bx bxs-quote-left',
                quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                authorname: 'Arjun'
            }
        ];

        return (
            <section id="about-us" className="about section-padding-3">
                <div className="about_us">
                    <div className="top-wave">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2262 305">
                            <path id="Shape 1" opacity="0.2" fill="current" d="M0 137.78C0 137.78 303 201.1 552 116.78C552 116.78 892.5 -42.39 1188 156.78C1188 156.78 1477.5 388.11 1875 272.78C1875 272.78 2151 201.1 2262 221.78L2262 0.78L0 0.78L0 137.78Z" />
                            <path id="Shape 2" opacity="0.8" fill="current" d="M0 112.78C0 112.78 303 176.1 552 91.78C552 91.78 892.5 -67.39 1188 131.78C1188 131.78 1477.5 363.11 1875 247.78C1875 247.78 2151 176.1 2262 196.78L2262 -1.22L0 -1.22L0 112.78Z" />
                        </svg>
                    </div>
                    <div className="about_content">
                        <Container>
                            <SectionTitle SectionTitleText={this.state.SectionTitleData} />
                            <Row className="align-items-center justify-content-center">
                                <Col xl={6} lg={6} md={6} sm={12} className="my-3">
                                    <div className="content wow fadeInUp" data-wow-offset="10" data-wow-delay="0.3s">
                                        <p className="text-white-50">I'm a frontend web developer From India. UI and Web Developer with over 5 years of experience. I can provide clean code and pixel perfect design. I also make website more interactive with web animations.</p>
                                        <ul className="list-unstyled personal_info my-4">
                                            {
                                                personalInfoData.map((item, index) => {
                                                    return (
                                                        <li key={index} className="text-white-50"><span className="text-white">{item.title}</span> {item.description}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <Btns btnComponent={this.state.btnComponent} />
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className="my-3">
                                    <div className="img overflow-hidden wow fadeInUp" data-wow-offset="10" data-wow-delay="0.4s">
                                        <Image src={aboutImg} alt="about-img" fluid="true" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="bottom-wave">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2262 446">
                            <path id="Shape 3" opacity='0.2' fill='current' d="M0 66C0 66 160 163.84 374 93C374 93 722.5 -19.16 740 180C740 180 703.5 403.66 1032 289.33C1032 289.33 1234 214.22 1374 325C1374 325 1634 570.22 1822 254.22C1822 254.22 2032.5 -121.34 2262 73L2262 447L0 447L0 66Z" />
                            <path id="Shape 4" opacity='0.8' fill='current' d="M0 86C0 86 160 183.84 374 113C374 113 722.5 0.84 740 200C740 200 703.5 423.66 1032 309.33C1032 309.33 1229 238.11 1374 345C1374 345 1623 585.66 1827 284.33C1827 284.33 2040 -112.66 2262 93L2262 447L0 447L0 86Z" />
                        </svg>
                    </div>
                </div>

                <div className="overview-content">
                    <Container>
                        <Row className="align-items-center text-center">
                            <Col xl={4} lg={5} md={6} sm={12}>
                                <div className="overview-slider m-3 wow fadeInUp" data-wow-offset="10" data-wow-delay="0.5s">
                                    <Slider {...settings}>
                                        {
                                            OverViewSliderData.map((item, index) => {
                                                return (
                                                    <div key={index} className="single-item text-center">
                                                        <i className={item.icon}></i>
                                                        <h5 className="mt-4 text-white">{item.quote}</h5>
                                                        <p className="text-white-50">- {item.authorname}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </Col>
                            <Col xl={{ span: 7, offset: 1 }} lg={7} md={6} sm={12}>
                                <Row>
                                    {
                                        OverViewData.map((item, index) => {
                                            return (
                                                <Col key={index} xl={4} lg={4} md={6} sm={6} className="wow fadeInUp" data-wow-offset="10" data-wow-delay={item.animateDelay}>
                                                    <Card as={Card.Body} className="border-0 text-center">
                                                        <i className={item.icon}></i>
                                                        <h5 className="mt-3">{item.overViewTitle}</h5>
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <span className="circle-shape"></span>
                </div>
            </section>
        )
    }
}
