import React, { Component } from 'react'
import '../../assets/sass/preloader.scss'

export default class Preloader extends Component {
    render() {
        return (
            <div id="loading">
                <div className="preloader">
                    <span className="spin-1"></span>
                    <span className="spin-2"></span>
                </div>
            </div>
        )
    }
}
