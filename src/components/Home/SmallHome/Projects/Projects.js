import Title from './Title/Title.js';
import ProjIcon from './ProjIcon.js';
import { Parallax } from 'react-scroll-parallax';

//import photos
import SorVisBG from '../../ProjectBackgrounds/SortingVisualizerIcon.jpg';
import MushDrivBG from '../../ProjectBackgrounds/MushroomDriver.jpg';
import ChatAppBG from '../../ProjectBackgrounds/ChatAppIcon.jpg';
import FishFeedBG from '../../ProjectBackgrounds/FishyFeederBackground.jpg';
import MetFinBG from '../../ProjectBackgrounds/MetFinBackground.jpg';
import objectDetection from '../../ProjectBackgrounds/tensorflow.png';
import gretBG from '../../ProjectBackgrounds/gret_bg.png';
import clearnetBG from '../../ProjectBackgrounds/clearnet_bg.png';

const Projects = () => {
    return (
        <div id="projects">
            <Title text="Projects" split={3} relSize={1} />
            <Title text="2023" split={1.5} relSize={0.8} />
            <Parallax
                scale={[1, 1.2]}
                style={{
                    marginTop: '6%',
                    height: '70vh',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    <ProjIcon
                        to="/ClearNet"
                        img={clearnetBG}
                        altImg="Clear Net"
                        firstWords="Clear Net"
                        secondWords="(Machine Learning Framework)"
                    />
                    <ProjIcon
                        to="/Gret"
                        img={gretBG}
                        altImg="Global Regex Expression Tree"
                        firstWords="Global Regex"
                        secondWords="Expression Tree"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '3%',
                    }}
                >
                    <ProjIcon
                        to="/RealTimeObjDet"
                        img={objectDetection}
                        altImg="Tenserflow Object Detection"
                        firstWords="Real-Time Object"
                        secondWords="Detection Model"
                    />
                </div>
            </Parallax>
            <Title text="2022" split={1.5} relSize={0.8} />
            <Parallax
                scale={[1, 1.2]}
                style={{
                    marginTop: '6%',
                    height: '70vh',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    <ProjIcon
                        to="/SortingVisualizer"
                        img={SorVisBG}
                        altImg="Sorting Visualizer"
                        firstWords="Sorting"
                        secondWords="Visualizer"
                    />
                    <ProjIcon
                        to="/MushroomDriver"
                        img={MushDrivBG}
                        altImg="Mushroom Driver"
                        firstWords="Mushroom"
                        secondWords="Driver"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '3%',
                    }}
                >
                    <ProjIcon
                        to="/ChatApp"
                        img={ChatAppBG}
                        altImg="Chat App"
                        firstWords="Online"
                        secondWords="Chat App"
                    />
                </div>
            </Parallax>

            <Title text="2021" split={1.5} relSize={0.8} />
            <Parallax
                scale={[1, 1.2]}
                style={{
                    marginTop: '6%',
                    height: '40vh',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    <ProjIcon
                        to="/FishyFeeder"
                        img={FishFeedBG}
                        altImg="Fishy Feeder"
                        firstWords="Fishy"
                        secondWords="Feeder"
                    />
                    <ProjIcon
                        to="/MeteorFingers"
                        img={MetFinBG}
                        altImg="Meteor Fingers"
                        firstWords="Meteor"
                        secondWords="Fingers"
                    />
                </div>
            </Parallax>
        </div>
    );
};

export default Projects;
