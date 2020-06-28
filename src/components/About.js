import React from "react";
import { Button, Container, Row,
        Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

class About extends React.Component{

    render(){
        console.log(this.props.inputRef);

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
                            <Button className="site-button" variant="primary"><AiOutlineDownload color="white"/> Download CV</Button>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default About;