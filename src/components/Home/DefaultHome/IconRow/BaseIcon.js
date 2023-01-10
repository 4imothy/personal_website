import React from 'react'
import { Parallax } from "react-scroll-parallax";

export default function CSSICon({ startX, startScale, endScale, Icon, startRotate, endRotate }) {

    return (
        <Parallax style={{
            position: 'absolute',
            left: `${startX}%`
        }}
        scale={[startScale, endScale]} rotate={[startRotate, endRotate]} easing="easeInQuad" speed={20}>
            <img style={{
                width: '12vmax'
            }} src={Icon} alt="LanguageIcon" />
        </Parallax>

    );
}