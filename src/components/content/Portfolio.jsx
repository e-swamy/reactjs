import React, { Component } from 'react'
import { Container, Row, Col, Card, Image, Modal, Button } from 'react-bootstrap'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import WOW from 'wowjs'
import SectionTitle from '../shared/SectionTitle';
import '../../assets/sass/portfolio.scss'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            modalShow: false,
            SectionTitleData: {
                sectionTitle: 'My Works',
                sectionSubTitle: 'Portfolio',
            },
            imageSrc: '',

            images: [
                {
                    id: 1,
                    image: 'https://source.unsplash.com/v_BWg0OnFmk/900x700',
                    datatitle: "Lorem ipsum dolor sit",
                    animateDelay: '0.3s',
                    data: "Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum viverra turpis."
                },
                {
                    id: 2,
                    image: 'https://source.unsplash.com/zCQsBI7ZltQ/900x700',
                    datatitle: "Lorem ipsum dolor sit",
                    animateDelay: '0.4s',
                    data: "Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum viverra turpis."
                },
                {
                    id: 3,
                    image: 'https://source.unsplash.com/RJT2EWPR0d0/900x700',
                    datatitle: "Lorem ipsum dolor sit",
                    animateDelay: '0.5s',
                    data: "Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum viverra turpis."
                },
                {
                    id: 4,
                    image: 'https://source.unsplash.com/EjnPmNJ5Hf8/900x700',
                    datatitle: "Lorem ipsum dolor sit",
                    animateDelay: '0.6s',
                    data: "Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum viverra turpis."
                },
                {
                    id: 5,
                    image: 'https://source.unsplash.com/5M2r7r0VzpM/900x700',
                    datatitle: "Lorem ipsum dolor sit",
                    animateDelay: '0.7s',
                    data: "Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum viverra turpis."
                },
                {
                    id: 6,
                    image: 'https://source.unsplash.com/efOx1YtBriI/900x700',
                    datatitle: "Lorem ipsum dolor sit",
                    animateDelay: '0.8s',
                    data: "Nulla vel metus scelerisque ante sollicitudin commodo Cras purus odio vestibulum viverra turpis."
                },
            ]
        };
    }

    handlemodal = (imageSrc) => {
        this.setState({
            modalShow: true,
            imageSrc: imageSrc
        })
    }

    truncateText = (str) => {
        return str.length > 80 ? str.substring(0, 50) + "..." : str;
    }

    componentDidMount() {
        // Wow JS
        new WOW.WOW({
            live: false
        }).init();
    }

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;

            return (
                <Col xl={4} lg={4} md={6} sm={12} key={photoIndex} className="mb-5 wow fadeInUp" data-wow-offset="10" data-wow-delay={imageSrc.animateDelay}>
                    <Card className="portfolio_card border-0 overflow-hidden h-100 bg-dark">
                        <Card.Img variant="top" src={imageSrc.image} alt="" fluid="true" />
                        <div className="content p-3">
                            <div className="icon-block mb-4 d-flex align-items-center justify-content-center border-0">
                                <i className='bx bx-plus' onClick={() => this.setState({ photoIndex: privateKey, isOpen: true })} ></i>
                            </div>
                            <div className="text-block">
                                <Card.Title className="pacifico">{imageSrc.datatitle}</Card.Title>
                                <Card.Text className="mb-2">
                                    {this.truncateText(imageSrc.data)}
                                </Card.Text>
                                <Button variant="link p-0 text-white text-decoration-none" onClick={() => this.handlemodal(imageSrc)}>Read More</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            );
        })
    }
    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <section id="portfolio" className="portfolio_section">
                <div className="top-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2262 305">
                        <path id="Shape 1" opacity="0.2" fill="current" d="M0 137.78C0 137.78 303 201.1 552 116.78C552 116.78 892.5 -42.39 1188 156.78C1188 156.78 1477.5 388.11 1875 272.78C1875 272.78 2151 201.1 2262 221.78L2262 0.78L0 0.78L0 137.78Z" />
                        <path id="Shape 2" opacity="0.8" fill="current" d="M0 112.78C0 112.78 303 176.1 552 91.78C552 91.78 892.5 -67.39 1188 131.78C1188 131.78 1477.5 363.11 1875 247.78C1875 247.78 2151 176.1 2262 196.78L2262 -1.22L0 -1.22L0 112.78Z" />
                    </svg>
                </div>
                <div className="portfolio_content section-padding-3">
                    <Container>
                        <SectionTitle SectionTitleText={this.state.SectionTitleData} />
                        <Row>
                            {this.renderImages()}
                        </Row>
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex].image}
                                nextSrc={images[(photoIndex + 1) % images.length].image}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
                                imageTitle={photoIndex + 1 + "/" + images.length}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length
                                    })
                                }
                            />
                        )}
                    </Container>
                </div>

                <Modal show={this.state.modalShow} onHide={() => this.setState({ modalShow: false })}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="font-weight-bold h5" id="contained-modal-title-vcenter">
                            {this.state.imageSrc.datatitle}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.state.imageSrc.image} alt="img" rounded fluid />
                        <div className="content mt-3">
                            {this.state.imageSrc.data}
                        </div>
                    </Modal.Body>
                </Modal>

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
