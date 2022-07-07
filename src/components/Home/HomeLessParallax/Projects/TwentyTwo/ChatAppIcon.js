import styles from './ChatAppIcon.module.scss';
import IconImage from '../ProjectBackgrounds/ChatAppIcon.png';
import { Link } from 'react-router-dom';

const ChatAppIcon = () => {
    return (
        <Link to='/ChatApp' >
        <img className={styles.icon} src={IconImage} alt="Chat App"/>
        <div className={styles.textContainer}>
                <h1 className={styles.text}>Instant <br/> Messaging <br/> Web App</h1>
            </div>
        </Link>
    );
}

export default ChatAppIcon;