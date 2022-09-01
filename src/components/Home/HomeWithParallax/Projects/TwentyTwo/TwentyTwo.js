import TwentyTwoTitle from './Title/TwentyTwoTitle.js';
import { Parallax } from 'react-scroll-parallax';
import IconOutline from '../IconOutline.js';

//importing images for icons
import MushDriveBG from '../ProjectIcons/MushroomDriver.png';
import ChatAppBG from '../ProjectIcons/ChatAppIcon.png';

const TwentyTwo = () => {
    return (
        <div>
            <TwentyTwoTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '3%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <IconOutline img={MushDriveBG} linkTo="/MushroomDriver" altImg="Mushroom Driver" firstwords="Mushroom" secondWords="Driver" />
                <IconOutline img={ChatAppBG} linkTo="/ChatApp" altImg="Chat App" firstwords="Simple" secondWords="Chat App" />
            </Parallax >
        </div >
    );
}

export default TwentyTwo;
