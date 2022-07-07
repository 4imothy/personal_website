import { Parallax } from "react-scroll-parallax";
import styles from './AboutMeText.module.scss';

/*
I'm a sophomore at Case Western Reserve University and an avid explorer 
of both coding and nature (proof to the right). Coding allows me to 
design and create things with both a creative and analytical mindset. 
Take, for example, this website (check out the source code on my GitHub). 
Thus, I greatly enjoy creating new projects in my free time. Apart from 
this website, I have created two games, an instant messaging website, 
and am currently working on an infinite runner using Unity. These are 
all visible in the projects section of my website. 
I will continue to update this website with new projects, so stay tuned! 
*/

const intro = "Hi, I'm Tim.";
const lineOne = "I'm a sophomore at Case Western Reserve University and an avid explorer";
const lineTwo = "of both coding and nature (proof to the right). Coding allows me to";
const lineThree = "design and create things with both a creative and analytical mindset.";
const lineFour = "Take, for example, this website (check out the source code on my GitHub).";
const lineFive = "Thus, I greatly enjoy creating new projects in my free time. Apart from";
const lineSix = "this website, I have created two games, an instant messaging website,";
const lineSeven = "and am currently working on an infinite runner using Unity. These are";
const lineEight = "all visible in the projects section of my website.";
const lineNine = "I will continue to update this website with new projects, so stay tuned!";

const AboutMeText = () => {

    const ease = [.23,.91,1,0];
    return (
        <div className={styles.root}>
            <div className={styles.text}>
                <Parallax className={styles.line} translateX={[60, -100]} easing={ease}>
                    <span>{intro}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[80, -105]} easing={ease}>
                    <span>{lineOne}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[80, -120]} easing={ease}>
                    <span>{lineTwo}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[90, -130]} easing={ease}>
                    <span>{lineThree}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[100, -140]} easing={ease}>
                    <span>{lineFour}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[110, -155]} easing={ease}>
                    <span>{lineFive}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[120, -170]} easing={ease}>
                    <span>{lineSix}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[130, -180]}easing={ease}>
                    <span>{lineSeven}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[140, -190]} easing={ease}>
                    <span>{lineEight}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[150, -210]} easing={ease}>
                    <span>{lineNine}</span>
                </Parallax>
            </div>
        </div>
    )
}

export default AboutMeText