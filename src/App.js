import React from 'react';
import Profile from 'components/Profile';
import About from 'components/About';
import Resume from 'components/Resume';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';


class App extends React.Component {

    constructor(props){
        super(props);

        this.About = React.createRef();
        this.Resume = React.createRef();
        this.Projects = React.createRef();
        this.scrollToContent = this.scrollToContent.bind(this);
    }

    scrollToContent(content) {
        console.log("here");
        switch(content) {
            case "Hello":
                this.About.current.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
            case "Resume":
                this.Resume.current.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
            case "Portfolio":
                this.Projects.current.scrollIntoView({block: 'start',behavior: 'smooth'});
                break;
            default: this.About.current.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
        }

    }

    render(){
        return (
            <div className="main">
                <NavBar scrollToContent={this.scrollToContent} />
                <Profile />
                <About inputRef={this.About}/>
                <hr color="#616f6d"/>
                <Resume inputRef={this.Resume}/>
                <hr color="#616f6d"/>
                <Projects inputRef={this.Projects}/>
                <Footer />
            </div>
        );
    }

}

export default App;