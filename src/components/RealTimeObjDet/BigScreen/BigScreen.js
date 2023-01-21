import styles from './style.module.scss';
import ghIcon from '../Images/githubIcon.png';
import ghHover from '../Images/githubIconHover.png';

const Title = () => {
    return (
        <div className={styles.titleContainer}>
            <h1>Realtime Rock-Paper-Scissors Detector</h1>
        </div>

    )
}

const Content = () => {
    return (
        <div style={{
          display: 'flex',
        }}> 
          <div className={styles.text}>
            <p>
              During winter break of my sophomore year I set out to learn more about machine learning. This pursuit ended in creating a
              trained model that detects in real time whether a person is throwing a rock, paper or scissors. I began this project by 
              learning about diffent types of learning algorithms and the tensorflow library. Then I set out to create my own model. <br/>
              The first step is to collect the images, then I defined bounding boxes around the object that is to be detected.
              I then trained the model to be able to detect the positions in real time.
            </p>
        </div>
          <div className={styles.text}>
        <iframe title="Object Detection" className={styles.frame} width={500} height={300} src="https://youtube.com/embed/8uR1J-osmfc" /> 
            <br/>
            <a href="https://github.com/4tlc/realtime_rock_paper_scissors_recognition_model" target="_blank" rel="noreferrer">
                <img className={styles.icon} src={ghIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = ghHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = ghIcon;
                    }} style={{
                        left: '0%'
                    }}/>
            </a>
          </div>
       </div>
    );
}

const DefaultPage = () => {

    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

export default DefaultPage;