import React from "react";
import {Col, Container, ProgressBar, Row} from "react-bootstrap";

class Resume extends React.Component{

    render(){

        return(
            <Container className="section" ref={this.props.inputRef}>
                <Row>
                    <Col md={10}>
                        <h2 className="section-title">Resume</h2>
                        <p className="section-description"><span>
                            {
                                process.env.REACT_APP_USER_RESUME_INTRO
                            }
                        </span>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="resume-list">
                        <h3  className="resume-list-title">EDUCATION</h3>
                            {
                                JSON.parse(process.env.REACT_APP_USER_EDUCATION).map((item, index) =>{
                                    return(
                                        <div className="resume-list-block" key={index}>
                                            <p className="resume-list-block-title" key={index}>{item.university}</p>
                                            <p className="resume-list-block-date" key={index+1}>{item.years}</p>
                                            <p className="resume-list-block-detail" key={index+2}>{item.degree}</p>
                                        </div>
                                    )
                                })
                            }
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="resume-list">
                        <h3  className="resume-list-title">EMPLOYMENT</h3>
                        {
                            JSON.parse(process.env.REACT_APP_USER_EMPLOYMENT).map((item, index) =>{
                                return(
                                    <div className="resume-list-block" key={index}>
                                        <p className="resume-list-block-title" key={index}>{item.company}</p>
                                        <p className="resume-list-block-date" key={index+1}>{item.years}</p>
                                        <p className="resume-list-block-detail" key={index+2}>{item.role}</p>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className="progress-list">
                    <Col md={12}>
                        <h3 className="progress-list-title">GENERAL SKILLS</h3>
                    </Col>
                    <Col md={5} className="mr-auto">
                        {
                            JSON.parse(process.env.REACT_APP_USER_GENERAL_SKILLS).map((item, index) =>{
                                if(index < JSON.parse(process.env.REACT_APP_USER_GENERAL_SKILLS).length/2)
                                return(
                                    <div className="progress-list-skill" key={index}>
                                        <p>
                                            <span className="progress-list-skill-title">{item.skill}</span>
                                            <span className="progress-list-skill-value">{item.value}%</span>
                                        </p>
                                        <ProgressBar now={item.value}/>
                                    </div>
                                )
                                else{
                                    return null;
                                }
                            })
                        }
                    </Col>
                    <Col md={5} className="mr-auto">
                        {
                            JSON.parse(process.env.REACT_APP_USER_GENERAL_SKILLS).map((item, index) =>{
                                if(index >= JSON.parse(process.env.REACT_APP_USER_GENERAL_SKILLS).length/2)
                                    return(
                                        <div className="progress-list-skill" key={index}>
                                            <p>
                                                <span className="progress-list-skill-title">{item.skill}</span>
                                                <span className="progress-list-skill-value">{item.value}%</span>
                                            </p>
                                            <ProgressBar now={item.value}/>
                                        </div>
                                    )
                                else{
                                    return null;
                                }
                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;