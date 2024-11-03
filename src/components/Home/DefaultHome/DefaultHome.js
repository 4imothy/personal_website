import Header from './Header/Header.js';
import IconRow from './IconRow/IconRow.js';
import AboutMe from './AboutMe/AboutMe.js';
import Projects from './Projects/Projects.js';
import { ParallaxProvider } from 'react-scroll-parallax';

const DefaultHome = () => {
    return (
        <ParallaxProvider>
            <Header />
            <IconRow />
            <AboutMe />
            <Projects />
        </ParallaxProvider>
    );
};

export default DefaultHome;
