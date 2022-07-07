import TitleImg from '../Images/Title.png';
import styles from './style.module.scss';
import githubIcon from '../Images/githubIcon.png';
import githubIconHover from '../Images/githubIconHover.png';
import gameIcon from '../Images/gameIcon.png';
import gameIconHover from '../Images/gameIconHover.png';

const FishyFeederForSmallScreen = () => {
    return (
        <div>
            <Title />
            <Text />
            <EmbeddedGame />
        </div>
    )
}

function Title() {
    return (
        <img className={styles.title} src={TitleImg} alt="Fishy Feeder" />
    )
}

function Text() {
    return (
        <div className={styles.text}>
            <p>
                Fishy Feeder is a fast-paced game I made over the course of freshman year.
                You take control of a fish that has to feed other fishes before they eat you.
                The game resizes to fit any screen and keps track of your highscores.
                <br /><br />
                You can play the game below or follow the link below to play.
                It is built with vanilla HTML, CSS and JavaScript.
            </p>

            <a href="https://github.com/4tlc/FishyFeeder/" target="_blank" rel="norepper">
                <img className={styles.icon} src={githubIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = githubIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = githubIcon;
                    }} />
            </a>
            <a href="https://4tlc.github.io/fishyfeeder/" target="_blank" rel="norepper">
                <img className={styles.gameIcon} src={gameIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = gameIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = gameIcon;
                    }} />
            </a>
        </div>
    )
}

function EmbeddedGame() {
    return (
        <div className={styles.gameContainer}>
            <iframe title="Fishy Feeder Game" src="https://4tlc.github.io/fishyfeeder/" className={styles.game} />
        </div>
    )
}
export default FishyFeederForSmallScreen;