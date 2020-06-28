import React from "react";
import { Container,
        Row, Col, Image } from "react-bootstrap";
import ProfilePic2 from "assets/images/testBW2.png";
import Background from "assets/images/BGtest4.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

class Profile extends React.Component{

    render(){


        return(
            <header className="main-header" style={{backgroundImage: "url(" + Background +")"}}>
                <Container>
                    <Row className="personal-profile">
                        <Col md={4} className="personal-profile-avatar">
                            <Image src={ProfilePic2} rounded />
                        </Col>
                        <Col md={8}>
                            <p className="personal-profile-name">
                                {
                                    process.env.REACT_APP_USER_NAME
                                }
                            </p>
                            <p className="personal-profile-work">
                                {
                                    JSON.parse(process.env.REACT_APP_USER_ROLE)[0]
                                },{' '}

                                {
                                    JSON.parse(process.env.REACT_APP_USER_ROLE)[1]
                                }
                            </p>
                            <div className="personal-profile-contacts">
                                <dl className="contact-list">
                                    <dt>Age:</dt>
                                    <dd>
                                        {
                                            process.env.REACT_APP_USER_AGE
                                        }
                                    </dd>
                                    <dt>Phone:</dt>
                                    <dd>
                                        {
                                            process.env.REACT_APP_USER_PHONE
                                        }
                                    </dd>
                                    <dt>Email:</dt>
                                    <dd>
                                        {
                                            process.env.REACT_APP_USER_EMAIL
                                        }
                                    </dd>
                                    <dt>Address:</dt>
                                    <dd>
                                        {
                                            process.env.REACT_APP_USER_ADDRESS
                                        }
                                    </dd>
                                </dl>
                            </div>
                            <p className="personal-profile-socials" >
                                <a href={process.env.REACT_APP_USER_GITHUB} target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub/>
                                </a>
                                <a href={process.env.REACT_APP_USER_LINKEDIN} target="_blank" rel="noopener noreferrer">
                                    <AiFillLinkedin/>
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Profile;