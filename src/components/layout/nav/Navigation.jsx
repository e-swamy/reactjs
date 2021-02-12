import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import '../../../assets/sass/nav.scss'

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);
    const navbarData = [
        {
            id: 1,
            title: 'Home',
            targetLink: 'heroslider'
        },
        {
            id: 2,
            title: 'About Me',
            targetLink: 'about-us'
        },
        {
            id: 3,
            title: 'Service',
            targetLink: 'service'
        },
        {
            id: 4,
            title: 'Resume',
            targetLink: 'resume'
        },
        {
            id: 5,
            title: 'Portfolio',
            targetLink: 'portfolio'
        },
        {
            id: 6,
            title: 'Contact Us',
            targetLink: 'contact'
        }
    ]
    return (
        <Navbar className="sam_navbar" expanded={expanded} collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="heroslider" className="app_logo" onClick={() => setExpanded(false)}>
                    <span className="latter">S</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            navbarData.map((itemList, index) => {
                                return (
                                    <Nav.Item key={index}>
                                        <Link className="nav-link" to={itemList.targetLink} onClick={() => setExpanded(false)}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            offset={100}>{itemList.title}</Link>
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
