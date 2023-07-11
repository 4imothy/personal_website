import styles from "./style.module.scss";
import ghIcon from "../../SharedIcons/githubIcon.png";
import ghHover from "../../SharedIcons/githubIconHover.png";

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <h1>Clear Net</h1>
    </div>
  );
};

const Content = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className={styles.text}>
        <p>
          Clear Net is a framework for the creation and training of arbitrarily
          sized neural nets. Its name comes from <i>C</i> (the language used),
          learn and net. The neural network models created with Clear Net are
          trained through the utilization of the widely adopted backpropagation
          algorithm. Clear Net offers many activation functions and techniques
          to address challenges like the vanishing gradient problem and dead
          neurons. Moreover, Clear Net provides a user-friendly interface for
          simple modification of hyperparameters. In the{" "}
          <a
            href="https://github.com/4imothy/clear_net/tree/main/examples"
            target="_blank"
          >
            github repository
          </a>{" "}
          there are multiple examples of networks trained on popular machine
          learning problems.
        </p>
      </div>
      <div className={styles.text}>
        <iframe
          title="Object Detection"
          className={styles.frame}
          width={500}
          height={300}
          src="https://www.youtube.com/embed/fAFYYygTzzk"
        />
        <br />
        <a
          href="https://github.com/4imothy/clear_net"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.icon}
            src={ghIcon}
            alt={"See On GitHub"}
            onMouseOver={(e) => {
              e.currentTarget.src = ghHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = ghIcon;
            }}
            style={{
              left: "0%",
            }}
          />
        </a>
      </div>
    </div>
  );
};

const DefaultPage = () => {
  return (
    <div>
      <Title />
      <Content />
    </div>
  );
};

export default DefaultPage;
