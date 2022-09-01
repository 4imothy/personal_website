import Title from "./Title/Title";
import TwentyOne from "./TwentyOne/TwentyOne.js";
import TwentyTwo from './TwentyTwo/TwentyTwo.js';

const Projects = () => {
    return (
        <div id="projects">
            <Title />
            <div style={{
                position: 'relative',
            }}>
                <TwentyTwo />
                <TwentyOne />
            </div>
        </div>
    );
}

export default Projects;