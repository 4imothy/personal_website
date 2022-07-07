import { Parallax } from "react-scroll-parallax";
import styles from './Title.module.scss';

const letters = "Projects".split("");

const Title = () => {
    return (
        <>
            <span className={styles.word}>
                {letters.map((letter, i) => (
                    <Parallax
                        key={`ProjectTitle-${i}`}
                        translateX={[100 * (i - 3), 0]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
            <Parallax scaleX={[1,.6]} className={styles.underline} />
        </>
    );
}

export default Title;