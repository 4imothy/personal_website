import githubIcon from '../Images/githubIcon.png';
import githubIconHover from '../Images/githubIconHover.png';
import toAppIcon from '../Images/toAppIcon.png';
import toAppIconHover from '../Images/toAppIconHover.png';
import styles from './style.module.scss';

const Content = () => {
    return (
        <>
            <Title />
            <Text />
            <Demo />
        </>
    );
}

function Title() {
    return (
        <div className={styles.title}>
            <p>Instant Messaging Web App</p>
        </div>
    );
}

function Text() {
    return (
        <div className={styles.text}>
            <p>
                This is an app I made in the beginning of the summer of 2022. In order
                to begin chatting you just need to enter a username and a room. You can then
                begin instant messaging with any number of people in the same room.
                For the frontend I used react, for the backend I used express servers and
                to communicate between the two I used socket.io. You can chat to the right
                or follow the link below to open the app in it's own window.
            </p>

            <a href="https://timothyschat.netlify.app/" target="_blank" rel="noreferrer">
                <img className={styles.appIcon} src={toAppIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = toAppIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = toAppIcon;
                    }} />
            </a>
            <a href="https://www.github.com/4tlc/simplechatapp" target="_blank" rel="noreferrer">
                <img className={styles.icon} src={githubIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = githubIconHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = githubIcon;
                    }} />
            </a>
        </div>
    )
}

function Demo() {
    return (
        <iframe title="Chat App Demo" className={styles.demo} width={500} height={500} src="https://timothyschat.netlify.app/" />
    );
}

export default Content;