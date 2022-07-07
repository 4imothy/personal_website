import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from './scrolldirections.module.scss';
import Arrows from './Arrows.png';


const ScrollDirections = () => (
    <Parallax opacity={['1','-.5']} speed={-10}>
        <div className={styles.container}>
            <h1 className={styles.text}>Scroll</h1>
            <img className={styles.image} src={Arrows} alt="Scroll Down To See More" />
        </div>
    </Parallax>
);

export default ScrollDirections;