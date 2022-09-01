import { Parallax } from "react-scroll-parallax";
import styles from './ProjectTitle.module.scss';

const ProjectTitle = () => {

    const letters = "Projects".split("");
    
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
        <Parallax scaleX={[1,.75]} className={styles.underline} />
    </>    );
}


export default ProjectTitle;