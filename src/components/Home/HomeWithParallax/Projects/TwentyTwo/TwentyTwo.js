import TwentyTwoTitle from './Title/TwentyTwoTitle.js';
import { Parallax } from 'react-scroll-parallax';
import IconOutline from '../IconOutline.js';

//importing images for icons
import MushDriveBG from '../ProjectIcons/MushroomDriver.png';
import ChatAppBG from '../ProjectIcons/ChatAppIcon.png';
import SorVisBG from '../ProjectIcons/SortingVisualizerIcon.png'

const TwentyTwo = () => {
    return (
        <div>
            <TwentyTwoTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '3%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <IconOutline img={MushDriveBG} linkTo="/MushroomDriver" altImg="Mushroom Driver" firstwords="Mushroom" secondWords="Driver" />
                    <IconOutline img={ChatAppBG} linkTo="/ChatApp" altImg="Chat App" firstwords="Simple" secondWords="Chat App" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: '7%'
                }}>
                    <IconOutline img={SorVisBG} linkTo="/SortingVisualizer" altImg="Sorting Visualizer" firstwords="Sorting" secondWords="Visualizer" />
                </div>
            </Parallax >
        </div >
    );
}

export default TwentyTwo;
