import styles from './ProjIconStyle.module.scss';
import { Link } from 'react-router-dom';

const ProjIcon = ({ to, img, altImg, firstWords, secondWords }) => {
    return (
        <Link to={to} className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.text}>{firstWords} <br/> {secondWords}</h1>
            </div>
            <img className={styles.icon} src={img} alt={altImg} />
        </Link>
    );
}

export default ProjIcon;