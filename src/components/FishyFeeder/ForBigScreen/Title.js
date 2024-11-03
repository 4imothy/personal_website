import title from '../Images/Title.png';
import styles from './style.module.scss';

const Title = () => {
    return (
        <div className={styles.titleContainer}>
            <img className={styles.title} src={title} alt="Fishy Feeder" />
        </div>
    );
};

export default Title;
