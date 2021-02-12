import React, { Component } from 'react'
import { Container, Row, Col, ProgressBar, Media } from 'react-bootstrap'
import WOW from 'wowjs'
import SectionTitle from '../shared/SectionTitle';
import '../../assets/sass/resume.scss'

export default class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SectionTitleDataOne: {
                sectionTitle: 'My Skills',
                sectionSubTitle: 'Resume',
            },
            SectionTitleDataTwo: {
                sectionTitle: 'My Qualifications',
                sectionSubTitle: 'Exp.',
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

        const skillsData = [
            {
                id: 1,
                skillTitle: 'HTML5',
                hovericon: 'bx bxl-html5',
                skillPercentage: 80,
                animateDelay: '0.2s'
            },
            {
                id: 2,
                skillTitle: 'CSS3',
                hovericon: 'bx bxl-css3',
                skillPercentage: 80,
                animateDelay: '0.3s'
            },
            {
                id: 3,
                skillTitle: 'Javascript',
                hovericon: 'bx bxl-javascript',
                skillPercentage: 45,
                animateDelay: '0.4s'
            },
            {
                id: 4,
                skillTitle: 'jQuery',
                hovericon: 'bx bxl-jquery',
                skillPercentage: 70,
                animateDelay: '0.5s'
            },
            {
                id: 5,
                skillTitle: 'ReactJS',
                hovericon: 'bx bxl-react',
                skillPercentage: 45,
                animateDelay: '0.6s'
            },
            {
                id: 6,
                skillTitle: 'Photoshop',
                hovericon: 'bx bxl-adobe',
                skillPercentage: 75,
                animateDelay: '0.7s'
            }
        ];

        const expEduData = [
            {
                id: 1,
                sectionTitle: 'Working Experience',
                expEduInnerData: [
                    {
                        id: 1,
                        mediaicon: 'bx bx-briefcase',
                        yearinfo: 'April, 2018 - Present',
                        title: 'Lorem ipsum dolor sit amet',
                        subtitle: 'Sr. Web & UI Developer',
                        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.',
                        animateDelay: '0.3s'
                    },
                    {
                        id: 2,
                        mediaicon: 'bx bx-briefcase',
                        yearinfo: 'Sept, 2016 - April, 2018',
                        title: 'Lorem ipsum dolor sit amet',
                        subtitle: 'UI & UX Developer',
                        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum in vulputate at tempus viverra turpis',
                        animateDelay: '0.4s'
                    },
                    {
                        id: 3,
                        mediaicon: 'bx bx-briefcase',
                        yearinfo: 'June, 2015 - Sept, 2016',
                        title: 'Lorem ipsum dolor sit amet',
                        subtitle: 'Web Designer',
                        description: 'Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum in vulputate at tempus viverra turpis, Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                        animateDelay: '0.5s'
                    }
                ]
            },
            {
                id: 2,
                sectionTitle: 'Educational Qualifications',
                expEduInnerData: [
                    {
                        id: 1,
                        mediaicon: 'bx bx-book-reader',
                        yearinfo: '2013',
                        title: 'Engineering Degree',
                        subtitle: 'University',
                        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.',
                        animateDelay: '0.2s'
                    },
                    {
                        id: 2,
                        mediaicon: 'bx bx-book-reader',
                        yearinfo: '2009',
                        title: 'Intermediate',
                        subtitle: 'College',
                        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum in vulputate at tempus viverra turpis',
                        animateDelay: '0.3s'
                    },
                    {
                        id: 3,
                        mediaicon: 'bx bx-book-reader',
                        yearinfo: '2007',
                        title: 'SSC',
                        subtitle: 'High School',
                        description: 'Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum in vulputate at tempus viverra turpis, Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                        animateDelay: '0.4s'
                    }
                ]
            }
        ];


        return (
            <section id="resume" className="resume_section section-padding-6">
                <Container>
                    <div className="skill_content py-5">
                        <SectionTitle SectionTitleText={this.state.SectionTitleDataOne} />
                        <Row>
                            {
                                skillsData.map((item, index) => {
                                    return (
                                        <Col key={index} xl={6} lg={6} md={12} className="wow fadeInUp" data-wow-offset="10" data-wow-delay={item.animateDelay}>
                                            <div className="progressbar_section mb-4">
                                                <h5>{item.skillTitle}</h5>
                                                <i className={item.hovericon} />
                                                <div className="d-flex align-items-center">
                                                    <h6 className="mr-5 mb-0">{item.skillPercentage}<span>%</span></h6>
                                                    <div className="w-100">
                                                        <ProgressBar variant="progress_color" now={item.skillPercentage} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                    <div className="experience_content py-5">
                        <SectionTitle SectionTitleText={this.state.SectionTitleDataTwo} />
                        <Row>
                            {
                                expEduData.map((item, index) => {
                                    const { expEduInnerData } = item;
                                    return (
                                        <Col key={index} xl={6} lg={6} md={12}>
                                            <div className="section-title wow fadeInUp" data-wow-offset="10" data-wow-delay="0.3">
                                                <h4 className="pacifico">{item.sectionTitle}</h4>
                                            </div>
                                            <ul className="list-unstyled timeline">
                                                {
                                                    expEduInnerData.map((values, index) => {
                                                        return (
                                                            <Media key={index} as="li" className="wow fadeInUp" data-wow-offset="10" data-wow-delay={values.animateDelay}>
                                                                <div className="media_icon">
                                                                    <i className={values.mediaicon}></i>
                                                                </div>
                                                                <Media.Body>
                                                                    <div className="time text-uppercase">{values.yearinfo}</div>
                                                                    <h5 className="text-uppercase">{values.title}<span className="place">{values.subtitle}</span></h5>
                                                                    <p className="text-white-50">{values.description}</p>
                                                                </Media.Body>
                                                            </Media>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }
}
