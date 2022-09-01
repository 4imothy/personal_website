import { Parallax } from "react-scroll-parallax";
import styles from './AboutMeText.module.scss';

/*
Hi, I’m Tim
 
I’m a  sophomore at Case Western Reserve University (Class of 2025), majoring in Computer Science. 
I enjoy exploring nature and developing new computer programs. I am able to create programs that 
can address practical issues, be fun to use, or both. Take, for example, this website (source is public on my GitHub) 
or other projects I have made which are visible if you keep scrolling. 
There you will see 
I have created an instant messaging web app, two games, and am currently working on a new driving game using the Unity Engine. 
I will continue to update this website with any changes or new projects so stay tuned!

*/

const intro = "Hi, I'm Tim.";
const lineOne = "I’m a  sophomore at Case Western Reserve University (Class of 2025),";
const lineTwo = "majoring in Computer Science. I enjoy exploring nature and developing";
const lineThree = "new computer programs. I am able to create programs that can address";
const lineFour = "practical issues, be fun to use, or both. Take, for example,";
const lineFive = "this website (source is public on my GitHub) or other projects I have made";
const lineSix = "which are visible if you keep scrolling. There you will see";
const lineSeven = "I have created an instant messaging web app, two games,";
const lineEight = "and am currently working on a new driving game using the Unity Engine.";
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