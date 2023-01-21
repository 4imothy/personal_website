import Title from "./Title/Title";
import TwentyOne from "./TwentyOne.js";
import TwentyTwo from './TwentyTwo.js';
import TwentyThree from './TwentyThree.js'

const Projects = () => {
    return (
        <div id="projects">
            <Title text={"Projects"} split={3} relSize={1}/>
            <div style={{
                position: 'relative',
            }}>
                <TwentyThree />
                <TwentyTwo />
                <TwentyOne />
            </div>
        </div>
    );
}

export default Projects;