import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Btns extends Component {
    render() {
        return (
            <Button className="btn-theme">
                <i className="btn-curve" />
                <span className="btn-title">{this.props.btnComponent.btnName}</span>
            </Button>
        )
    }
}
