import React from "react";
import { Container, Row,
        Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import myResume from "assets/resume/RounakSenguptaResume.pdf"

class About extends React.Component{

    render(){
        //
        return(
                <Container id="section" className="section" ref={this.props.inputRef}>
                    <Row>
                        <Col md={10}>
                            <h2 className="section-title">Hi</h2>
                            <p className="section-description">
                                <span>
                                    {
                                        process.env.REACT_APP_USER_ABOUT
                                    }
                                </span>
                            </p>
                            <a className="site-button" href={myResume} target="_blank" rel="noopener noreferrer" download="Rounak_Sengupta_Resume.pdf"><AiOutlineDownload size={20} color="white"/> Download CV</a>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default About;