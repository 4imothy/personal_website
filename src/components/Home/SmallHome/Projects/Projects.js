import ProjectTitle from './Title/ProjectTitle.js';
import TwentyTwoTitle from './TwentyTwoTitle.js';
import TwentyOneTitle from './TwentyOneTitle.js';
import ProjIcon from './ProjIcon.js';
import { Parallax } from 'react-scroll-parallax';

//import photos
import SorVisBG from '../../ProjectBackgrounds/SortingVisualizerIcon.png';
import MushDrivBG from '../../ProjectBackgrounds/MushroomDriver.png';
import ChatAppBG from '../../ProjectBackgrounds/ChatAppIcon.png';
import FishFeedBG from '../../ProjectBackgrounds/FishyFeederBackground.jpg';
import MetFinBG from '../../ProjectBackgrounds/MetFinBackground.jpg';

const Projects = () => {
    return (
        <div id="projects">
            <ProjectTitle />
            <TwentyTwoTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '7%',
                height: '70vh',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <ProjIcon to="/MushroomDriver" img={MushDrivBG} altImg="Mushroom Driver" firstWords="Mushroom" secondWords="Driver" />
                    <ProjIcon to="/ChatApp" img={ChatAppBG} altImg="Chat App" firstWords="Online" secondWords="Chat App" />
                </div>
            </Parallax>

            <TwentyOneTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '7%',
                height: '40vh',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'flex',
                    justifyContent: 'space-around',
                }}>
                    <ProjIcon to="/FishyFeeder" img={FishFeedBG} altImg="Fishy Feeder" firstWords="Fishy" secondWords="Feeder" />
                    <ProjIcon to="/MeteorFingers" img={MetFinBG} altImg="Meteor Fingers" firstWords="Meteor" secondWords="Fingers" />
                </div>
            </Parallax>
        </div>
    );
}

export default Projects;