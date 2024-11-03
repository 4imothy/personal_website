import Title from './Title/Title';
import { Parallax } from 'react-scroll-parallax';
import IconOutline from './IconOutline.js';

//importing images for icons
import objectDetection from '../../ProjectBackgrounds/tensorflow.png';
import gretBG from '../../ProjectBackgrounds/gret_bg.png';
import clearnetBG from '../../ProjectBackgrounds/clearnet_bg.png';

const TwentyThree = () => {
    return (
        <div
            style={{
                marginTop: '5%',
            }}
        >
            <Title text="2023" split={1.5} relSize={0.8} />
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
                        linkTo="/ClearNet"
                        altImg="Clear Net"
                        firstwords="Clear Net"
                        secondWords="(Machine Learning Framework)"
                    />
                    <IconOutline
                        img={gretBG}
                        linkTo="/Gret"
                        altImg="Gloral Regex Expression Tree"
                        firstwords="Global Regex"
                        secondWords="Expression Tree"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: '1%',
                    }}
                >
                    <IconOutline
                        img={objectDetection}
                        linkTo="/RealTimeObjDet"
                        altImg="Tensorflow Object Detection"
                        firstwords="Real-time Object"
                        secondWords="Detection Model"
                    />
                </div>
            </Parallax>
        </div>
    );
};

export default TwentyThree;
