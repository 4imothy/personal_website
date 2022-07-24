import styles from './style.module.scss';
import AppStoreIcon from '../Images/AppStoreIcon.png';
import AppStoreIconHover from '../Images/AppStoreIconHover.png';

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
                    The game is available on the Apple App Store.
                </p>

                <a href="https://apps.apple.com/us/app/mushroom-driver/id1635598791" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={AppStoreIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = AppStoreIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = AppStoreIcon;
                        }} />
                </a>
            </div>
            <iframe title="Mushroom Driver Gameplay" className={styles.video} width={250} height={500} src="https://www.youtube.com/embed/3aTBQLyE46Y" />
        </>
    );
}

export default Content;