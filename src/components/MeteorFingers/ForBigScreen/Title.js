import titleImg from '../Images/TitleImg.png';
import styles from './style.module.scss';

const Title = () => {
    return (
        <img className={styles.title} src={titleImg} alt="Meteor Fingers" />
    )
}

export default Title;