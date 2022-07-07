import TwentyTwoTitle from './Title/TwentyTwoTitle.js';
import ChatAppIcon from './InstantChatApp/ChatAppIcon.js';
import MushDriverIcon from './MushroomDriver/MushDriverIcon.js';
import { Parallax } from 'react-scroll-parallax';

const TwentyTwo = () => {
    return (
        <div style={{
            marginTop: '3%',
        }}>
            <TwentyTwoTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '2%',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                height: '40vh'
            }}>
                <div style={{
                    transform: 'translateX(10%)'
                }}>
                    <MushDriverIcon />
                </div>

                <div style={{
                    transform: 'translateX(60%)'
                }}>
                    <ChatAppIcon />
                </div>
            </Parallax>
        </div>
    );
}

export default TwentyTwo;