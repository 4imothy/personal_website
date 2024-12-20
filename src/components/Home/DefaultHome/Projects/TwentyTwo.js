import Title from './Title/Title';
import { Parallax } from 'react-scroll-parallax';
import IconOutline from './IconOutline.js';

//importing images for icons
import MushDriveBG from '../../ProjectBackgrounds/MushroomDriver.jpg';
import ChatAppBG from '../../ProjectBackgrounds/ChatAppIcon.jpg';
import SorVisBG from '../../ProjectBackgrounds/SortingVisualizerIcon.jpg';

const TwentyTwo = () => {
    return (
        <div
            style={{
                marginTop: '5%',
            }}
        >
            <Title text="2022" split={1.5} relSize={0.8} />
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
                        img={SorVisBG}
                        linkTo="/SortingVisualizer"
                        altImg="Sorting Visualizer"
                        firstwords="Sorting"
                        secondWords="Visualizer"
                    />
                    <IconOutline
                        img={MushDriveBG}
                        linkTo="/MushroomDriver"
                        altImg="Mushroom Driver"
                        firstwords="Mushroom"
                        secondWords="Driver"
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
                        img={ChatAppBG}
                        linkTo="/ChatApp"
                        altImg="Chat App"
                        firstwords="Online"
                        secondWords="Chat App"
                    />
                </div>
            </Parallax>
        </div>
    );
};

export default TwentyTwo;
