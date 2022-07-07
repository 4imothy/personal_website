import { Parallax } from "react-scroll-parallax";
import styles from './TwentyTwoTitle.module.scss';

const letters = "2022".split("");

const TwentyTwoTitle = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>
                {letters.map((letter, i) => (
                    <Parallax
                        key={`22Title-${i}`}
                        translateX={[100 * (i - 1.5), 0]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
            <Parallax scaleX={[.4,.3]} className={styles.underline} />
            </div>
    );
}

export default TwentyTwoTitle;