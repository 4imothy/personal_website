import styles from './style.module.scss';
import Cloud from '../Images/cloud.png';
import Forest from '../Images/forest.jpg';
import Moon from '../Images/moon.png';
import { useState } from 'react';

const Background = () => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    })

    function handleMouseMove(e) {
        setMousePosition({
            left: e.pageX,
            top: e.pageY
        })
    }
    return (
        <div className={styles.backgroundContainer} onMouseMove={(e) => {
            handleMouseMove(e);
        }}>
            <div className={styles.imgContainer} >
                <ForestImage x={mousePosition.left} y={mousePosition.top} />
                <MoonImage x={mousePosition.left} y={mousePosition.top} left={5} top={5} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={50} top={20} changeConst={-2} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={20} top={10} changeConst={1}/>
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={70} top={15} changeConst={2}/>
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={30} top={25} changeConst={-3}/>
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={80} top={5} changeConst={-3}/>
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={15} top={20} changeConst={1}/>
            </div>
        </div>
    );
}

function ForestImage({ x, y }) {
    return (
        <img src={Forest} alt="Plants" style={{
            position: 'absolute',
            marginLeft: '50%',
            transform: `translate(${-55 - (x / 500)}%) translateY(${-2 + (y / 500)}%)`,
            width: '120%',
            height: '110%',
        }} />
    );
}

function CloudImage({ x, y, left, top, changeConst}) {
    return (
        <img src={Cloud} alt="Plants" style={{
            position: 'absolute',
            left: `${left}%`,
            top: `${top}%`,
            transform: `translate(${(x * changeConst) / 200}%) translateY(${(y * changeConst) / 400}%)`,
            width: '5%',
            height: '5%',
            filter: 'brightness(70%)',
        }} />
    );
}

function MoonImage({ x, y, left, top }) {
    return (
        <img src={Moon} alt="Plants" style={{
            position: 'absolute',
            left: `${left}%`,
            top: `${top}%`,
            transform: `translate(${-x / 300}%) translateY(${-y / 300}%)`,
            width: '10%',
            height: '15%',
        }} />
    );
}
export default Background;