import styles from './style.module.scss';
import AppStoreIcon from '../Images/AppStoreIcon.png';
import AppStoreIconHover from '../Images/AppStoreIconHover.png';
import GooglePlayIcon from '../Images/googlePlayIcon.png';
import GooglePlayIconHover from '../Images/googlePlayIconHover.png'; 
import { useEffect } from 'react';

const SmallScreen = () => {

    useEffect(() => {
        document.title = "Mushroom Driver";
        document.body.setAttribute('style', 'background: url("https://res.cloudinary.com/dmr8ozkfj/image/upload/v1658696898/forest_jdwbto.jpg") no-repeat center center fixed;'
            + '  -webkit-background-size: cover;'
            + '-moz-background-size: cover;'
            + '-o-background-size: cover;'
            + 'background-size: cover;'
        );
    })

    return (
        <div>
            <Title />
            <Text />
            <Video />
        </div>
    )
}

function Title() {
    return (
        <p className={styles.title}>Mushroom Driver</p>
    )
}

function Text() {
    return (
        <div style={{
            textAlign: 'center'
        }}>
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
                    <img className={styles.icon} src={AppStoreIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = AppStoreIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = AppStoreIcon;
                        }} />
                </a>
                <a href="https://apps.apple.com/us/app/mushroom-driver/id1635598791" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={GooglePlayIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = GooglePlayIconHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = GooglePlayIcon;
                        }}
                        style={{
                            left: '35%',
                        }} />
                </a>
            </div>
        </div>
    )
}

function Video() {
    return (
        <div className={styles.videoContainer} >
            <iframe className={styles.video} title="Meteor Fingers Gameplay" src="https://www.youtube.com/embed/3aTBQLyE46Y" />
        </div>
    )
}

export default SmallScreen;