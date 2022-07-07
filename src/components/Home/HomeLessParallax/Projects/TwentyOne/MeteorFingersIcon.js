import styles from './MeteorFingersIcon.module.scss';
import IconImage from '../ProjectBackgrounds/MetFinBackground.jpg';
import { Link } from 'react-router-dom';

const MeteorFingersIcon = () => {
    return (
        <Link to='/MeteorFingers' >
        <img className={styles.icon} src={IconImage} alt="Chat App"/>
        <div className={styles.textContainer}>
                <h1 className={styles.text}>Meteor Fingers</h1>
            </div>
        </Link>
    );
}

export default MeteorFingersIcon;