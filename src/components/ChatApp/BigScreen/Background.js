import Green from '../Images/green.png';
import Blue from '../Images/blue.png';
import Pink from '../Images/pink.png';
import Purple from '../Images/purple.png';
import { useState } from 'react';
import styles from './style.module.scss';

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
            <MessageIcon
                icon={Green}
                top={20}
                left={40}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Blue}
                top={40}
                left={80}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Pink}
                top={80}
                left={60}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Purple}
                top={45}
                left={50}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Green}
                top={60}
                left={20}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Blue}
                top={0}
                left={30}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Pink}
                top={30}
                left={15}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Purple}
                top={10}
                left={90}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Green}
                top={10}
                left={10}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Blue}
                top={90}
                left={80}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Pink}
                top={10}
                left={70}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Purple}
                top={90}
                left={10}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
            <MessageIcon
                icon={Purple}
                top={85}
                left={35}
                x={mousePosition.left}
                y={mousePosition.top}
                changeConst={-5}
            />
        </div>
    );
};

function MessageIcon({ icon, top, left, x, y, changeConst }) {
    var rotate = 0;
    if (changeConst < 0) {
        rotate = 180;
    }
    return (
        <img
            src={icon}
            alt="Message"
            style={{
                width: '3%',
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                transform: `translateX(${(changeConst * x) / 100}%) translateY(${
                    (changeConst * y) / 100
                }%) rotateY(${rotate}deg`,
                transition: 'transform 100ms',
                zIndex: '0',
            }}
        />
    );
}

export default Background;
