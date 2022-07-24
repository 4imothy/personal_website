import styles from './style.module.scss';
import Cloud from '../Images/cloud.png';
import Moon from '../Images/moon.png';
import { useState, useEffect } from 'react';

const Background = () => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    })

    const [backY, setBackY] = useState(0);

    function handleMouseMove(e) {
        setMousePosition({
            left: e.pageX,
            top: e.pageY
        });
        setBackY(e.pageY);
    }


    useEffect(() => {
        document.title = "Mushroom Driver";
        document.body.setAttribute('style', 'background: url("https://res.cloudinary.com/dmr8ozkfj/image/upload/v1658696898/forest_jdwbto.jpg") no-repeat center center fixed;'
            + '  -webkit-background-size: cover;'
            + '-moz-background-size: cover;'
            + '-o-background-size: cover;'
            + 'background-size: cover;'
            + `background-position-y: ${backY / 50}%;`
        );
    }, [backY])

    return (
        <div className={styles.backgroundContainer} onMouseMove={(e) => {
            handleMouseMove(e);
        }}>
            <div className={styles.imgContainer} >
                <MoonImage x={mousePosition.left} y={mousePosition.top} left={5} top={5} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={50} top={20} changeConst={-2} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={20} top={10} changeConst={1} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={70} top={15} changeConst={2} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={30} top={25} changeConst={-3} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={80} top={5} changeConst={-3} />
                <CloudImage x={mousePosition.left} y={mousePosition.top} left={15} top={20} changeConst={1} />
            </div>
        </div>
    );
}

function CloudImage({ x, y, left, top, changeConst }) {
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