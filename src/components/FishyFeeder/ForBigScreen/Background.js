import { useState } from "react";
import styles from './style.module.scss';
import Blue from '../Images/blueFish.png';
import Main from '../Images/mainCharFish.png';
import Purple from '../Images/purpleFish.png';
import Red from '../Images/redFish.png';
import Green from '../Images/greenFish.png';

const Background = () =>{
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
                <Fish icon={Blue} top={10} left={50} x={mousePosition.left} y={mousePosition.top} changeConst={-3} />
                <Fish icon={Main} top={20} left={10} x={mousePosition.left} y={mousePosition.top} changeConst={5} />
                <Fish icon={Purple} top={80} left={40} x={mousePosition.left} y={mousePosition.top} changeConst={-3} />
                <Fish icon={Red} top={60} left={70} x={mousePosition.left} y={mousePosition.top} changeConst={-6} />
                <Fish icon={Green} top={30} left={90} x={mousePosition.left} y={mousePosition.top} changeConst={5} />
                <Fish icon={Blue} top={90} left={30} x={mousePosition.left} y={mousePosition.top} changeConst={-3} />
                <Fish icon={Main} top={40} left={60} x={mousePosition.left} y={mousePosition.top} changeConst={-3} />
                <Fish icon={Purple} top={20} left={80} x={mousePosition.left} y={mousePosition.top} changeConst={2} />
                <Fish icon={Red} top={30} left={40} x={mousePosition.left} y={mousePosition.top} changeConst={6} />
                <Fish icon={Green} top={80} left={90} x={mousePosition.left} y={mousePosition.top} changeConst={-3} />
                <Fish icon={Purple} top={80} left={20} x={mousePosition.left} y={mousePosition.top} changeConst={-3} />
                <Fish icon={Green} top={40} left={15} x={mousePosition.left} y={mousePosition.top} changeConst={5} />
            </div>
    );
}

function Fish({ icon, top, left, x, y, changeConst }) {

    var rotate = 0;
    if(changeConst < 0) { 
        rotate =180;
    }
    return (
        <img src={icon} alt="Fish" style={{
            width: '3%',
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            transform: `translateX(${changeConst * x / 100}%) translateY(${changeConst * y / 100}%) rotateY(${rotate}deg`,
            transition: 'transform 100ms',
            zIndex: '0',
        }} />
    )
}

export default Background;
