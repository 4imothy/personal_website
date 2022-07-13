import styles from './Text.module.scss';

const AboutMeText = () => {

    const opening = "Hi, I’m Tim";
    const text = "I’m a  sophomore at Case Western Reserve University (Class of 2025), majoring in Computer Science. I enjoy exploring nature and developing new computer programs. I am able to create programs that can address practical issues, be fun to use, or both. Take, for example, this website (source is public on my GitHub) or other projects I have made which are visible if you keep scrolling. There you will see I have created an instant messaging web app, two games, and am currently working on a new driving game using the Unity Engine. I will continue to update this website with any changes or new projects so stay tuned!"
    return (
        <div className={styles.container}>
            <p className={styles.text}>{opening}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default AboutMeText;