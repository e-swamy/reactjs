import React, { Component } from 'react'
import Navigation from '../components/layout/nav/Navigation'
import HeroSlider from '../components/content/HeroSlider'
import About from '../components/content/About'
import Service from '../components/content/Service'
import Resume from '../components/content/Resume'
import Portfolio from '../components/content/Portfolio'
import Contact from '../components/content/Contact'
import Footer from '../components/layout/footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <main className="sam-portifolio">
                    <HeroSlider />
                    <About />
                    <Service />
                    <Resume />
                    <Portfolio />
                    <Contact />
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}
