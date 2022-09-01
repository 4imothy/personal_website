import TwentyOneTitle from "./TwentyOneTitle";
import { Parallax } from "react-scroll-parallax";
import IconOutline from "../IconOutline";

//import icons
import MetFinBG from '../../../ProjectBackgrounds/MetFinBackground.jpg';
import FishFeedBG from '../../../ProjectBackgrounds/FishyFeederBackground.jpg';

const TwentyOne = () => {
    return (
        <div style={{
            marginTop: '10%',
        }}>
            <TwentyOneTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '3%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <IconOutline img={FishFeedBG} linkTo="/FishyFeeder" altImg="Fishy Feeder" firstwords="Fishy" secondWords="Feeder" />
                <IconOutline img={MetFinBG} linkTo="/MeteorFingers" altImg="Meteor Fingers" firstwords="Meteor" secondWords="Fingers" />
            </Parallax>
        </div>
    );
}

export default TwentyOne;