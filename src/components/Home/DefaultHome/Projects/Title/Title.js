import { Parallax } from "react-scroll-parallax";
import styles from './Title.module.scss';

let marBot;

const Title = ({text,split, relSize}) => {
     if (relSize >= 1){
        marBot = 3 * relSize;
    }else {
        marBot = 0;
    }
    const letters = text.split("");
    return (
        <div style={{
                marginBottom: `${marBot}%`
            }}>
            <span className={styles.word} >
                {letters.map((letter, i) => (
                    <Parallax
                        key={`title-${i}`}
                        translateX={[100 * (i - split), 0]}
                        className={styles.letter}
                        style={{
                            fontSize:`${relSize * 4}em`
                        }}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
            <Parallax scaleX={[1*Math.pow(relSize, 4),.6*Math.pow(relSize,4)]} className={styles.underline} />
        </div>
    );
}

export default Title;