import styles from './MetFinIcon.module.scss';
import IconImage from '../../ProjectIcons/MetFinBackground.jpg';
import { Link } from 'react-router-dom';

const MushDriverIcon = () => {
    return (
        <Link to='/MeteorFingers'>
            <img className={styles.icon} src={IconImage} alt="Meteor Fingers"/>
            <div className={styles.textContainer}>
                    <h1 className={styles.text}>Meteor <br/> Fingers</h1>
                </div>
        </Link>
    );
}

export default MushDriverIcon;