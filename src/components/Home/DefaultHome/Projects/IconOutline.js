import { Link } from 'react-router-dom';
import styles from './IconOutline.module.scss';

const IconOutline = ({ linkTo, img, altImg, firstwords, secondWords }) => {
    return (
        <Link to={linkTo} className={styles.container}>
            <img className={styles.icon} src={img} alt={altImg} />
            <p className={styles.text}>
                {firstwords}
                <br />
                {secondWords}
            </p>
        </Link>
    );
};

export default IconOutline;
