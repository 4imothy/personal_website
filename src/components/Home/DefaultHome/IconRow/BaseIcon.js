import React from 'react'
import { Parallax } from "react-scroll-parallax";
import styles from './baseicon.module.scss';

export default function CSSICon({ startX, endX, startScale, endScale, Icon, startRotate, endRotate }) {

    return (
        <Parallax style={{
            position: 'absolute'
        }}
        translateX={[`${startX}%`, `${endX}%`]} scale={[startScale, endScale]} rotate={[startRotate, endRotate]} easing="easeInQuad" speed={20}>
            <div className={styles.container}>
                <img className={styles.icon} src={Icon} alt="LanguageIcon" />
            </div>
        </Parallax>

    );
}