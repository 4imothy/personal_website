import styles from './ProjIconStyle.module.scss';
import { Link } from 'react-router-dom';

const ProjIcon = ({to, img, altImg, words}) => {
    return (
        <Link to={to} >
        <img className={styles.icon} src={img} alt={altImg}/>
        <div className={styles.textContainer}>
                <h1 className={styles.text}>{words}</h1>
            </div>
        </Link>
    );
}

export default ProjIcon;