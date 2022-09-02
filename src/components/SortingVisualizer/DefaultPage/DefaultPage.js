import styles from './style.module.scss';
import ghIcon from '../Images/githubIcon.png';
import ghHover from '../Images/githubIconHover.png';
import { useEffect } from 'react';

const Title = () => {
    return (
        <div className={styles.titleContainer}>
            <h1>Sorting Visualizer</h1>
        </div>
    )
}

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
                <a href="https://github.com/4tlc/sorting_visualizer" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={ghIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = ghHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = ghIcon;
                        }} />
                </a>
            </div>
            <iframe title="Sorting Visualizer" className={styles.frame} width={400} height={500} src="https://4tlc.github.io/sorting_visualizer" />
        </>
    );
}

const DefaultPage = () => {
    useEffect(() =>{
        document.title = "Sorting Visualizer";
        document.body.setAttribute('style', 'background: #6a8f7a;'
            + '  -webkit-background-size: cover;'
            + '-moz-background-size: cover;'
            + '-o-background-size: cover;'
            + 'background-size: cover'
        );
    });

    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

export default DefaultPage;