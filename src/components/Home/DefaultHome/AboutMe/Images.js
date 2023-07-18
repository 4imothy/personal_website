import { Parallax } from 'react-scroll-parallax';
import styles from './Images.module.scss';
import asheville from '../../AboutMeImages/asheville.jpeg';
import fish from '../../AboutMeImages/fish.jpeg';
import frisbee from '../../AboutMeImages/frisbee.jpeg';
import tennis from '../../AboutMeImages/tennis.jpeg';

const Images = () => {
    return (
        <div className={styles.root}>
            <Parallax
                className={styles.imageContainer}
                rotateZ={[55, -180]}
                translateX={[60, -110]}
                easing={[0.35, 0.34, 1, 0.08]}
            >
                <img
                    style={{ width: '20%', marginTop: '-35%' }}
                    className={styles.image}
                    src={asheville}
                    alt="cool nature shot"
                />
            </Parallax>

            <Parallax
                className={styles.imageContainer}
                rotateZ={[-30, 180]}
                translateX={[60, -100]}
                easing={[0.35, 0.34, 1, 0.08]}
            >
                <img
                    style={{ width: '15%', marginTop: '-15%' }}
                    className={styles.image}
                    src={fish}
                    alt="cool nature shot"
                />
            </Parallax>

            <Parallax
                className={styles.imageContainer}
                translateX={[70, -100]}
                rotate={[-30, 300]}
                easing={[0.35, 0.34, 1, 0.08]}
            >
                <img
                    style={{ width: '8%', marginTop: '5%' }}
                    className={styles.image}
                    src={frisbee}
                    alt="cool nature shot"
                />
            </Parallax>
            <Parallax
                className={styles.imageContainer}
                rotateZ={[30, -200]}
                translateX={[80, -150]}
                easing={[0.35, 0.34, 1, 0.08]}
            >
                <img
                    style={{ width: '10%', marginTop: '5%' }}
                    className={styles.image}
                    src={tennis}
                    alt="cool nature shot"
                />
            </Parallax>
        </div>
    );
};

export default Images;
