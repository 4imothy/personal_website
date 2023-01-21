import styles from './ProjIconStyle.module.scss';
import { Link } from 'react-router-dom';

const ProjIcon = ({ to, img, altImg, firstWords, secondWords }) => {
    return (
        <Link to={to} className={styles.container}>
            <img className={styles.icon} src={img} alt={altImg} />
            <h1 className={styles.text}>{firstWords} <br/> {secondWords}</h1>
        </Link>
    );
}

export default ProjIcon;