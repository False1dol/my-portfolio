import React from "react";
import { Card, Container,
        Nav, Row, Col } from "react-bootstrap";
import * as AntIcon from "react-icons/ai";

const Icon = props => {
    const { iconName, size, color } = props;
    const icon = React.createElement(AntIcon[iconName]);
    return (
        <div style={{ fontSize: size, color: color }}>{icon}</div>
    );
};


class Projects extends React.Component{


    render(){


        return(
                <Container className="section" ref={this.props.inputRef}>
                    <Row>
                        <Col md={12}>
                            <h2 className="section-title">My Projects</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Nav defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link>All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1">Personal Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Course Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Future Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        {
                            JSON.parse(process.env.REACT_APP_USER_PERSONAL_PROJECTS).map((item, index) => {
                                return(
                                    <Col xs={8} md={6} lg={6} xl={4} className="project-cards">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Header>
                                                <Icon iconName={item.image} size={50} />
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.about}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })

                        }

                        {
                            JSON.parse(process.env.REACT_APP_USER_COURSE_PROJECTS).map((item, index) => {
                                return(
                                    <Col xs={8} md={6} lg={6} xl={4} className="project-cards">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Header>
                                                <Icon iconName={item.image} size={50} />
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.about}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })

                        }

                        {
                            JSON.parse(process.env.REACT_APP_USER_FUTURE_PROJECTS).map((item, index) => {
                                return(
                                    <Col xs={6} md={6} lg={6} xl={4} className="project-cards">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Header>
                                                <Icon iconName={item.image} size={50} />
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.about}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })

                        }

                    </Row>
                </Container>
        )
    }
}

export default Projects;