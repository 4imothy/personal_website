import styles from './FishyFeederIcon.module.scss';
import IconImage from '../../ProjectIcons/FishyFeederBackground.jpg';
import { Link } from 'react-router-dom';

const MushDriverIcon = () => {
    return (
        <Link to='/FishyFeeder'>
            <img className={styles.icon} src={IconImage} alt="Fishy Feeder"/>
            <div className={styles.textContainer}>
                    <h1 className={styles.text}>Fishy <br/> Feeder</h1>
                </div>
        </Link>
    );
}

export default MushDriverIcon;