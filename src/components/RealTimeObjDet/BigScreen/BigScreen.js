import styles from './style.module.scss';
import ghIcon from '../../SharedIcons/githubIcon.png';
import ghHover from '../../SharedIcons/githubIconHover.png';

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
              During winter break of my sophomore year, I set out to deepen my understanding of machine learning 
              by creating a trained model that could detect, in real-time, whether a person was throwing rock, paper, or scissors. 
              To achieve this, I familiarized myself with various learning algorithms and the Tensorflow library, and 
              subsequently set out to design and build my own model. My process began with gathering a dataset of images and 
              defining bounding boxes around the objects to be detected. Through training, 
              I was able to successfully teach the model to recognize and identify these objects in real-time.
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