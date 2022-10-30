import styles from './style.module.scss';
import AppStoreIcon from '../Images/AppStoreIcon.png';
import AppStoreIconHover from '../Images/AppStoreIconHover.png';
import GooglePlayIcon from '../Images/googlePlayIcon.png';
import GooglePlayIconHover from '../Images/googlePlayIconHover.png';
import GitHubIcon from '../Images/githubIcon.png';
import GitHubIconHover from '../Images/githubIconHover.png'

const Content = () => {
    return (
        <>
            <div className={styles.text}>
                <p>
                    Mushroom Driver is a game I created with Unity during summer 2022.
                    In this game you take control of one of many possible cars and drive
                    as long as you can through a mushroom land. Over time your car gets
                    faster and your turns must become sharper. There is also a global
                    leaderboard where you can display your username and show that you
                    are one of the best mushrooms drivers in the world.
                    <br />
                    <br />
                    The game is available on the Apple App Store and Google Play Store.
                </p>

                <a href="https://apps.apple.com/us/app/mushroom-driver/id1635598791" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={AppStoreIcon} alt={"See On App Store"} onMouseOver={(e) => {
                        e.currentTarget.src = AppStoreIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = AppStoreIcon;
                        }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.GooninGames.MushroomDriver" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={GooglePlayIcon} alt={"See On Google Play"} onMouseOver={(e) => {
                        e.currentTarget.src = GooglePlayIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = GooglePlayIcon;
                        }} style={{
                            left: '12%',
                        }}/>
                </a>
                <a href="https://github.com/4tlc/mushroom_driver" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={GitHubIcon} alt={"See On Google Play"} onMouseOver={(e) => {
                        e.currentTarget.src = GitHubIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = GitHubIcon;
                        }} style={{
                            left: '24%',
                        }}/>
                </a>
            </div>
            <iframe title="Mushroom Driver Gameplay" className={styles.video} width={250} height={500} src="https://www.youtube.com/embed/3aTBQLyE46Y" />
        </>
    );
}

export default Content;
