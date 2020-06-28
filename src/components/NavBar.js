import React from "react";
import {Container, Nav, Navbar, Row} from "react-bootstrap";


class NavBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            menuStyle: 'menu'
        }
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({menuStyle: 'menu-active'})
        } else {
            this.setState({menuStyle: 'menu'})
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }


    render(){
        return(
            <div className={this.state.menuStyle}>
                <Container>
                    <Row>
                        <div className="menu-wrapper">
                            <Navbar onSelect={this.props.scrollToContent} bg="transparent" expand="lg">
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link eventKey="Hello">HELLO</Nav.Link>
                                        <Nav.Link eventKey="Resume">RESUME</Nav.Link>
                                        <Nav.Link eventKey="Portfolio">PORTFOLIO</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NavBar;