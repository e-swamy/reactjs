import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class SectionTitle extends Component {
    render() {
        return (
            <Row className="section-title align-items-center justify-content-center">
                <Col xl={12} lg={12} md={12} sm={12} className="my-3">
                    <div className="section-title-content text-center wow fadeInUp" data-wow-offset="10" data-wow-delay="0.2s">
                        <h1 className="title pb-5">{this.props.SectionTitleText.sectionTitle}</h1>
                        <h2 className="section-title-bg">{this.props.SectionTitleText.sectionSubTitle}</h2>
                    </div>
                </Col>
            </Row>
        )
    }
}
