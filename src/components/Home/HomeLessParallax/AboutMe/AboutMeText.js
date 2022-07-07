import styles from './Text.module.scss';

const AboutMeText = () => {

    const text = "I'm a sophomore at Case Western Reserve University and an avid explorer" +
        "of both coding and nature (proof to the right). Coding allows me to" +
        "design and create things with both a creative and analytical mindset." +
        "Take, for example, this website (check out the source code on my GitHub)." +
        "Thus, I greatly enjoy creating new projects in my free time. Apart from " +
        "this website, I have created two games, an instant messaging website, " +
        "and am currently working on an infinite runner using Unity. These are " +
        "all visible in the projects section of my website. " +
        "I will continue to update this website with new projects, so stay tuned!";
    return (
        <div className={styles.container}>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default AboutMeText;