import { Parallax } from "react-scroll-parallax";
import styles from './title.module.scss';

const title = ({text, split, relSize}) => {
    const letters = text.split("");
  
    return (
        <>
        <span className={styles.word}>
            {letters.map((letter, i) => (
                <Parallax
                    key={`ProjectTitle-${i}`}
                    translateX={[100 * (i - split), 0]}
                    className={styles.letter}
                >
                    {letter}
                </Parallax>
            ))}
        </span>
        <Parallax scaleX={[relSize * 1,relSize * .75]} className={styles.underline} />
    </>    );
}


export default title;