import Title from './Title/Title';
import { Parallax } from 'react-scroll-parallax';
import IconOutline from './IconOutline.js';

import clearnetBG from '../../ProjectBackgrounds/clearnet_bg.png';

const TwentyFour = () => {
    return (
        <div>
            <Title text="2024" split={1.5} relSize={0.8} />
            <Parallax
                scale={[1, 1.2]}
                style={{
                    marginTop: '3%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <IconOutline
                        img={clearnetBG}
                        linkTo="/ai3"
                        altImg="AI3"
                        firstwords="ai3: Algorithmic"
                        secondWords="Control Over DNNs"
                    />
                </div>
            </Parallax>
        </div>
    );
};

export default TwentyFour;
