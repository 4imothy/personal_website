import styles from './style.module.scss';
import Earth from '../Images/Earth.png';
import Jupiter from '../Images/Jupiter.png';
import Mars from '../Images/Mars.png';
import Moon from '../Images/Moon.png';
import Neptune from '../Images/Neptune.png';
import Saturn from '../Images/Saturn.png';
import SpaceShip from '../Images/SpaceShip.png';
import UFO from '../Images/UFO.png';
import { useState } from 'react';

const Background = () => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    });

    function handleMouseMove(e) {
        setMousePosition({
            left: e.pageX,
            top: e.pageY,
        });
    }
    return (
        <div
            className={styles.backgroundContainer}
            onMouseMove={(e) => {
                handleMouseMove(e);
            }}
        >
            <Planet
                icon={Earth}
                top={10}
                left={15}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-2}
            />
            <Planet
                icon={Jupiter}
                top={60}
                left={60}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={2}
            />
            <Planet
                icon={Mars}
                top={5}
                left={75}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-3}
            />
            <Planet
                icon={Moon}
                top={80}
                left={10}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={3}
            />
            <Planet
                icon={Saturn}
                top={50}
                left={85}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <Planet
                icon={Neptune}
                top={35}
                left={40}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <Planet
                icon={SpaceShip}
                top={60}
                left={30}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={10}
            />
            <Planet
                icon={UFO}
                top={30}
                left={5}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={6}
            />
        </div>
    );
};

function Planet({ icon, top, left, x, y, changeConst }) {
    return (
        <img
            src={icon}
            alt="Planet"
            style={{
                width: '10%',
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                transform: `translateX(${(changeConst * x) / 100}%) translateY(${
                    (changeConst * y) / 100
                }%)`,
                transition: 'transform 100ms',
                zIndex: '0',
            }}
        />
    );
}

export default Background;
