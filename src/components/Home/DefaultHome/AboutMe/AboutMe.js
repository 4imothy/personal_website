import AboutMeText from './AboutMeText';
import Images from './Images';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <AboutMeText />
            <Images />
        </div>
    );
};

export default AboutMe;
