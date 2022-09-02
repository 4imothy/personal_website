import ProjectTitle from './Title/ProjectTitle.js';
import TwentyTwoTitle from './TwentyTwoTitle.js';
import TwentyOneTitle from './TwentyOneTitle.js';
import ProjIcon from './ProjIcon.js';
import { Parallax } from 'react-scroll-parallax';

//import photos
import SorVisBG from '../../ProjectBackgrounds/SortingVisualizerIcon.jpg';
import MushDrivBG from '../../ProjectBackgrounds/MushroomDriver.jpg';
import ChatAppBG from '../../ProjectBackgrounds/ChatAppIcon.jpg';
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
                    justifyContent: 'space-around'
                }}>
                    <ProjIcon to="/SortingVisualizer" img={SorVisBG} altImg="Sorting Visualizer" firstWords="Sorting" secondWords="Visualizer" />
                    <ProjIcon to="/MushroomDriver" img={MushDrivBG} altImg="Mushroom Driver" firstWords="Mushroom" secondWords="Driver" />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
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