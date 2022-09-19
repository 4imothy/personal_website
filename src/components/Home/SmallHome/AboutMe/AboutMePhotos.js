import styles from './AboutMePhotos.module.scss';
import BlueWater from '../../AboutMeImages/BlueWater.jpg';
import MeInCrevice from '../../AboutMeImages/MeInCrevice.jpg';
import MeOnBridge from '../../AboutMeImages/MeOnBridge.jpg';
import Sunset from '../../AboutMeImages/Sunset.jpg';

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
                    transform: 'translateY(10%)',
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
                    transform: 'translateY(5%)',
                    width: '100%',
                    height: '100%'
                }} src={MeInCrevice} alt="In Rocks" />
            </div>
        </div>
    );
}

export default AboutMePhotos;
