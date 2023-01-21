import Title from "./Title/Title";
import { Parallax } from 'react-scroll-parallax';
import IconOutline from './IconOutline.js';

//importing images for icons
import objectDetection from '../../ProjectBackgrounds/tensorflow.png';

const TwentyTwo = () => {
    return (
        <div>
            <Title text="2023" split={1.5} relSize={.8}/>
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '3%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <IconOutline img={objectDetection} linkTo="/RealTimeObjDet" altImg="Sorting Visualizer" firstwords="Real-time Object" secondWords="Detection Model" />
                </div>
            </Parallax >
        </div >
    );
}

export default TwentyTwo;
