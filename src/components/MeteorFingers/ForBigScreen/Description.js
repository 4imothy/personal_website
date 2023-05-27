import styles from './style.module.scss';
import githubIcon from '../Images/githubIcon.png';
import githubIconHover from '../Images/githubIconHover.png';

const Description = () => {
    return (
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

            <a href="https://github.com/4imothy/MeteorFingers/" target="_blank" rel="noreferrer">
                <img className={styles.icon} src={githubIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = githubIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = githubIcon;
                    }} />
            </a>
        </div>
    );
}

export default Description;