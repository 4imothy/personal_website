import styles from './Text.module.scss';

const AboutMeText = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                <span className={styles.opening}>Hi, I'm Timothy.</span>
                <br />
                I’m a junior at Case Western Reserve University ('25) pursuing a double major in
                Computer Science and Mathematics. Throughout my journey in those fields, I have
                developed an interest in leveraging low-level languages with manual memory
                management, as well as exploring the realm of artificial intelligence. With these
                tools I have created extremely fast command line tools and games, as well as an
                efficient and high speed neural net framework. My other projects include a mobile
                phone game, chat app, sorting visualizer and more. All of these projects can be seen
                on my{' '}
                <a target="_blank" href="https://github.com/4imothy">
                    GitHub
                </a>{' '}
                or in the project section below.
            </p>
        </div>
    );
};

export default AboutMeText;
