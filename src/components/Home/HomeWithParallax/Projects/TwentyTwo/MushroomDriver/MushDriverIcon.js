import styles from './MushDriverIcon.module.scss';
import IconImage from '../../ProjectIcons/MushroomDriver.png';
import { Link } from 'react-router-dom';

const MushDriverIcon = () => {
    return (
        <Link to='/MushroomDriver'>
            <img className={styles.icon} src={IconImage} alt="Mushroom Driver"/>
            <div className={styles.textContainer}>
                    <h1 className={styles.text}>Mushroom <br/> Driver</h1>
                </div>
        </Link>
    );
}

export default MushDriverIcon;