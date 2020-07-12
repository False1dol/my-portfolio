import React from "react";
import { Container, Row, Col,
        Nav } from "react-bootstrap";
import Background from "assets/images/background.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

class Footer extends React.Component{


    render(){

        return(
            <div className="background" style={{backgroundImage: "url("+ Background+")"}}>
                <Container fluid className="footer-container">
                    <Row>
                        <Col>
                            <Nav className="footer-nav">
                                <Nav.Item>
                                    <Nav.Link href={process.env.REACT_APP_USER_GITHUB} target="_blank" rel="noopener noreferrer"><AiFillGithub size={18}/>  GitHub</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href={process.env.REACT_APP_USER_LINKEDIN} target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={18}/>  LinkedIn</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <div className="copyright">
                                © Designed & Built by Rounak Sengupta.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;