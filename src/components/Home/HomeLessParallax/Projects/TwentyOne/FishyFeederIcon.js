import styles from './MeteorFingersIcon.module.scss';
import IconImage from '../ProjectBackgrounds/FishyFeederBackground.jpg';
import { Link } from 'react-router-dom';

const FishyFeederIcon = () => {
    return (
        <Link to='/FishyFeeder' >
        <img className={styles.icon} src={IconImage} alt="Fishy Feeder"/>
        <div className={styles.textContainer}>
                <h1 className={styles.text}>Fishy Feeder</h1>
            </div>
        </Link>
    );
}

export default FishyFeederIcon;