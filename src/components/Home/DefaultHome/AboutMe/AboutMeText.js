import { Parallax } from "react-scroll-parallax";
import styles from "./AboutMeText.module.scss";

const intro = "Hi, I'm Tim.";
const lineOne =
  "I’m currently a junior at Case Western Reserve University ('25)";
const lineTwo = "pursuing a double major in Computer Science and Mathematics.";
const lineThree =
  "Throughout my journey in those fields, I have developed an interest in";
const lineFour =
  "leveraging low-level languages with manual memory management,";
const lineFive = "as well as exploring the realm of artificial intelligence.";
const lineSix = "With these tools I have created extremely fast command line";
const lineSeven =
  "tools and games, as well as an efficient and high speed neural net framework.";
const lineEight =
  "My other projects include a mobile phone game, chat app, sorting visualizer";
const lineNine =
  "and more. All of these projects and more can be seen on my GitHub";
const lineTen = "or in the project section below.";

const AboutMeText = () => {
  const ease = [0.23, 0.91, 1, 0];
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <Parallax className={styles.line} translateX={[60, -100]} easing={ease}>
          <span>{intro}</span>
        </Parallax>
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
        <Parallax
          className={styles.line}
          translateX={[100, -140]}
          easing={ease}
        >
          <span>{lineFour}</span>
        </Parallax>
        <br />
        <Parallax
          className={styles.line}
          translateX={[110, -155]}
          easing={ease}
        >
          <span>{lineFive}</span>
        </Parallax>
        <br />
        <Parallax
          className={styles.line}
          translateX={[120, -170]}
          easing={ease}
        >
          <span>{lineSix}</span>
        </Parallax>
        <br />
        <Parallax
          className={styles.line}
          translateX={[130, -180]}
          easing={ease}
        >
          <span>{lineSeven}</span>
        </Parallax>
        <br />
        <Parallax
          className={styles.line}
          translateX={[140, -190]}
          easing={ease}
        >
          <span>{lineEight}</span>
        </Parallax>
        <br />
        <Parallax
          className={styles.line}
          translateX={[150, -210]}
          easing={ease}
          style={{ zIndex: 100 }}
        >
          and more. All of these projects and more can be seen on my{" "}
          <a target="_blank" href="https://github.com/4imothy">
            GitHub
          </a>
        </Parallax>
        <br />
        <Parallax
          className={styles.line}
          translateX={[150, -210]}
          easing={ease}
        >
          <span>{lineTen}</span>
        </Parallax>
      </div>
    </div>
  );
};

export default AboutMeText;
