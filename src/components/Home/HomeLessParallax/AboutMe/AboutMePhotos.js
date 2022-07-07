import BlueWater from './AboutMePhotos/BlueWater.jpg';
import MeInCrevice from './AboutMePhotos/MeInCrevice.jpg';
import MeOnBridge from './AboutMePhotos/MeOnBridge.jpg';
import Sunset from './AboutMePhotos/Sunset.jpg';
import styles from './AboutMePhotos.module.scss';

const AboutMePhotos = () => {
    return (
        <div style={{
        }}>
            <div className={styles.firstRow}>
                <img style={{
                    width: '40%',
                    height: '100%',
                }}
                    src={MeOnBridge} alt="Bridge" />
                <img style={{
                    width: '40%',
                    height: '100%'
                }} src={BlueWater} alt="Blue Water" />
            </div>
            <div className={styles.sunsetContainer}>
                <img style={{
                    width: '45%',
                    height: '100%',
                }} src={Sunset} alt="Sunset" />
            </div>
            <div className={styles.creviceContainer}>
                <img style={{
                    width: '100%',
                    height: '100%'
                }} src={MeInCrevice} alt="In Rocks" />
            </div>
            </div>
    );
}

export default AboutMePhotos;