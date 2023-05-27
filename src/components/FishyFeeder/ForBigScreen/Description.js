import githubIcon from '../../SharedIcons/githubIcon.png';
import githubIconHover from '../../SharedIcons/githubIconHover.png';
import gameIcon from '../Images/gameIcon.png';
import gameIconHover from '../Images/gameIconHover.png';
import styles from './style.module.scss';

const Description = () => {

    return (
        <div className={styles.text}>
            <p>
                Fishy Feeder is a fast-paced game I made over the course of freshman year.
                You take control of a fish that has to feed other fishes before they eat you.
                The game resizes to fit any screen and keps track of your highscores.
                <br /><br />
                You can play the game on the right or follow the link below to play.
                It is built with vanilla HTML, CSS and JavaScript.
            </p>

            <a href="https://github.com/4imothy/FishyFeeder/" target="_blank" rel="noreferrer">
                <img className={styles.icon} src={githubIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = githubIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = githubIcon;
                    }} />
            </a>
            <a href="https://4imothy.github.io/fishyfeeder/" target="_blank" rel="noreferrer">
                <img className={styles.gameIcon} src={gameIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = gameIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = gameIcon;
                    }} />
            </a>
        </div>
    );
}

export default Description;