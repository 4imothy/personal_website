import TitleImg from '../Images/TitleImg.png';
import githubIcon from '../Images/githubIcon.png';
import githubIconHover from '../Images/githubIconHover.png';
import styles from './style.module.scss';

const MetFinSmall = () => {
    return (
        <div>
            <Title />
            <Text />
            <VideoPlayer />
        </div>
    )
}

function Title() {
    return (
        <img className={styles.title} src={TitleImg} alt="Meteor Fingers" />
    )
}

function Text() {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <div className={styles.text}>
                <p>
                    Meteor Fingers is a typing game
                    where you defend the earth from meteors by typing.
                    The game gets harder over time and increases in difficulty
                    when the player makes a mistake.
                    <br /><br />
                    I created this game during
                    fall and winter break of 2021 using JavaFX and CSS.
                </p>
                <a href="https://github.com/4tlc/MeteorFingers/" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={githubIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = githubIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = githubIcon;
                        }} />
                </a>
            </div>
        </div>
    )
}

function VideoPlayer() {
    return (
        <div className={styles.videoContainer} >
            <iframe className={styles.video} title="Meteor Fingers Gameplay" src="https://www.youtube.com/embed/wVXMR2u8bO4" />
        </div>
    )
}

export default MetFinSmall;