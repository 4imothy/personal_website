import styles from './title.module.scss';
import Arrows from './Arrows.png';
import { Parallax } from 'react-scroll-parallax';

const Title = () => (
    <div className={styles.textContainer}>
        <h1 className={styles.text}>
            Timothy Leon <br /> Cronin IV
        </h1>
        <Parallax opacity={['1', '0']}>
            <div className={styles.container}>
                <h1 className={styles.imgText}>Scroll</h1>
                <img className={styles.image} src={Arrows} alt="Scroll Down To See More" />
            </div>
        </Parallax>
    </div>
);

export default Title;
