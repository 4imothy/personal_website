import { Parallax } from 'react-scroll-parallax';
import styles from './AboutMeText.module.scss';

// const lineOne = "I’m a junior at Case Western Reserve University ('25)";
// const lineTwo = 'pursuing a double major in Computer Science and Mathematics.';
// const lineThree = 'Throughout my journey in those fields, I have developed an interest in';
// const lineFour = 'leveraging low-level languages with manual memory management,';
// const lineFive = 'as well as exploring the realm of artificial intelligence.';
// const lineSix = 'With these tools I have created extremely fast command line';
// const lineSeven = 'tools and games, as well as an efficient and high speed neural net framework.';
// const lineEight = 'My other projects include a mobile phone game, chat app, sorting visualizer';
// const lineTen = 'or in the project section below.';

const intro = "Hi, I'm Timothy.";
const lineOne = "I’m a senior at Case Western Reserve University ('25) pursuing";
const lineTwo = 'majors in Computer Science and Mathematics. Throughout my journey I';
const lineThree = 'have developed an interest in developing and implementing high';
const lineFour = 'performant and energy efficient artificial intelligence algorithms.';
const lineFive = 'Most recently I have been working on a programming framework which';
const lineSix = 'enables users to select the algorithms that perform the operations in a';
const lineSeven = 'deep neural network. I have created high performance implementations of many';
const lineEight = 'algorithms for this framework. Using the framework’s implementations often';
const lineNine = 'provides a 20% speedup over original models which solely use implementations';
const lineTen = 'from popular ML frameworks, e.g., PyTorch. I have created extremely fast';
const lineEleven = 'command line tools and games, as well as a machine learning framework. My';
const lineTwelve =
    'other projects include a mobile phone game, chat app, sorting visualizer and more.';
const lineThirteen = 'or in the project section below.';

const AboutMeText = () => {
    const ease = [0.23, 0.91, 1, 0];
    return (
        <div className={styles.root}>
            <div className={styles.text}>
                <Parallax className={styles.line} translateX={[75, -100]} easing={ease}>
                    <span className={styles.intro}>{intro}</span>
                </Parallax>
                <br />
                <br />
                <br />
                <br />
                <Parallax className={styles.line} translateX={[80, -105]} easing={ease}>
                    <span>{lineOne}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[80, -120]} easing={ease}>
                    <span>{lineTwo}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[90, -130]} easing={ease}>
                    <span>{lineThree}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[100, -140]} easing={ease}>
                    <span>{lineFour}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[110, -155]} easing={ease}>
                    <span>{lineFive}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[120, -170]} easing={ease}>
                    <span>{lineSix}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[130, -180]} easing={ease}>
                    <span>{lineSeven}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[140, -190]} easing={ease}>
                    <span>{lineEight}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[150, -200]} easing={ease}>
                    <span>{lineNine}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[160, -210]} easing={ease}>
                    <span>{lineTen}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[170, -220]} easing={ease}>
                    <span>{lineEleven}</span>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[180, -230]} easing={ease}>
                    <span>{lineTwelve}</span>
                </Parallax>
                <br />
                <Parallax
                    className={styles.line}
                    translateX={[190, -240]}
                    easing={ease}
                    style={{ zIndex: 100 }}
                >
                    These projects can be seen on my{' '}
                    <a target="_blank" href="https://github.com/4imothy">
                        GitHub
                    </a>
                </Parallax>
                <br />
                <Parallax className={styles.line} translateX={[200, -250]} easing={ease}>
                    <span>{lineThirteen}</span>
                </Parallax>
            </div>
        </div>
    );
};

export default AboutMeText;
