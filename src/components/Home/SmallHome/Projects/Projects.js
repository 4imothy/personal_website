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
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                height: '40vh'
            }}>
                <div style={{
                    transform: 'translateX(5%)'
                }}>
                    <ProjIcon to="/MushroomDriver" img={MushDrivBG} altImg="Mushroom Driver" words="Mushroom Driver" />
                </div>

                <div style={{
                    transform: 'translateX(55%)'
                }}>
                    <ProjIcon to="/ChatApp" img={ChatAppBG} altImg="Chat App" words="Simple Chat App" />
                </div>
            </Parallax>
            <TwentyOneTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '7%',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                height: '40vh'
            }}>
                <div style={{
                    transform: 'translateX(5%)'
                }}>
                    <ProjIcon to="/FishyFeeder" img={FishFeedBG} altImg="Fishy Feeder" words="Fishy Feeder" />
                </div>
                <div style={{
                    transform: 'translateX(55%)'
                }}>
                    <ProjIcon to="/MeteorFingers" img={MetFinBG} altImg="Meteor Fingers" words="Meteor Fingers" />
                </div>
            </Parallax>
        </div>
    );
}

export default Projects;