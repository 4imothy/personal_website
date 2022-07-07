import { Parallax } from 'react-scroll-parallax';
import styles from './Images.module.scss';
import shoeOutlook from './Images/ShoesOutlook.jpg';
import blueWater from './Images/BlueWater.jpg';
import meInCrevice from './Images/MeInCrevice.jpg';
import sunset from './Images/Sunset.jpg';
import meOnBridge from './Images/MeOnBridge.jpg';

const Images = () => {
    return (
        <div className={styles.root}>
            <Parallax className={styles.imageContainer} rotateZ={[-30, 180]} translateX={[60, -100]} easing={[.35, .34, 1, .08]}>
                <img className={styles.image} src={meOnBridge} alt='cool nature shot' />
            </Parallax>

            <Parallax className={styles.imageContainer} rotateZ={[55, -180]} translateX={[70, -110]} easing={[.35, .34, 1, .08]}>
                <img className={styles.waterImage} src={blueWater} alt='cool nature shot' />
            </Parallax>

            <Parallax className={styles.imageContainer} rotate={[-90,90]} translateX={[50, -300]} easing={[.35, .34, 1, .08]}>
                <img className={styles.creviceImage} src={meInCrevice} alt='cool nature shot' />
            </Parallax>

            <Parallax className={styles.imageContainer} translateX={[58, -180]} rotate={[-30, 70]} easing={[.35, .34, 1, .08]}>
                <img className={styles.sunset} src={sunset} alt='cool nature shot' />
            </Parallax>

            <Parallax className={styles.imageContainer} translateX={[90, -180]} rotate={[-20, 90]}easing={[.35, .34, 1, .08]}>
                <img className={styles.flower} src={shoeOutlook} alt='cool nature shot' />
            </Parallax>
        </div>

    );
}

export default Images;