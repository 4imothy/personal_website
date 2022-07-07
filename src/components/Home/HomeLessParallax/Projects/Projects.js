import ProjectTitle from './Title/ProjectTitle.js';
import TwentyTwoTitle from './TwentyTwo/TwentyTwoTitle.js';
import MushDriverIcon from './TwentyTwo/MushroomDriverIcon.js';
import ChatAppIcon from './TwentyTwo/ChatAppIcon.js';

import TwentyOneTitle from './TwentyOne/TwentyOneTitle.js';
import MeteorFingersIcon from './TwentyOne/MeteorFingersIcon.js';
import FishyFeederIcon from './TwentyOne/FishyFeederIcon.js';
import { Parallax } from 'react-scroll-parallax';

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
                    <MushDriverIcon />
                </div>

                <div style={{
                    transform: 'translateX(55%)'
                }}>
                    <ChatAppIcon />
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
                    <FishyFeederIcon />
                </div>
                <div style={{
                    transform: 'translateX(55%)'
                }}>
                    <MeteorFingersIcon />
                </div>
            </Parallax>
        </div>
    );
}

export default Projects;