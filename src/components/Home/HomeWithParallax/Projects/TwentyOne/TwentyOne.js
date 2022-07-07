import TwentyOneTitle from "./Title/TwentyOneTitle";
import MetFinIcon from "./MeteorFingers/MetFinIcon";
import FishyFeederIcon from './FishyFeeder/FishyFeederIcon.js';
import { Parallax } from "react-scroll-parallax";

const TwentyOne = () => {
    return (
        <div stlye={{
            marginTop: '0%'
        }}>
            <TwentyOneTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '2%',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                height: '30vh'
            }}>
                <div style={{
                    transform: 'translateX(60%)'
                }}>
                    <MetFinIcon />
                </div>
                <div style={{
                    transform: 'translateX(10%)'
                }}>
                    <FishyFeederIcon />
                </div>
            </Parallax>
        </div>
    );
}

export default TwentyOne;