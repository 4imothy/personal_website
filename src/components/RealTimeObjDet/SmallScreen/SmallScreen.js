import styles from './style.module.scss';
import ghIcon from '../../SharedIcons/githubIcon.png';
import ghHover from '../../SharedIcons/githubIconHover.png';

function Title() {
    return (
        <div className={styles.title}>
            <p>RealTime Rock-Paper-Scissors Detector</p>
        </div>
    );
}

function Text() {
    return (
        <div className={styles.text}>
            <p>
                  During winter break of my sophomore year, I set out to deepen my understanding of machine learning 
              by creating a trained model that could detect, in real-time, whether a person was throwing rock, paper, or scissors. 
              To achieve this, I familiarized myself with various learning algorithms and the Tensorflow library, and 
              subsequently set out to design and build my own model. My process began with gathering a dataset of images and 
              defining bounding boxes around the objects to be detected. Through training, 
              I was able to successfully teach the model to recognize and identify these objects in real-time. 
            </p>

            <a href="https://github.com/4tlc/realtime_rock_paper_scissors_recognition_model" target="_blank" rel="noreferrer">
                <img className={styles.appIcon} src={ghIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = ghHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = ghIcon;
                    }} />
            </a>
        </div>
    )
}

function Demo() {
    return (
        <div className={styles.demoContainer}>
            <iframe title="Object Detection Demo" className={styles.demo} width={500} height={500} src="https://youtube.com/embed/8uR1J-osmfc" />
        </div>
    );
}

const SmallPage = () => {
    return (
        <>
            <Title />
            <Text />
            <Demo />
        </>
    )
}

export default SmallPage;