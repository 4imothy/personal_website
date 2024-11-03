import styles from './Text.module.scss';

const AboutMeText = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                <span className={styles.opening}>Hi, I'm Timothy.</span>
                <br />
                I’m a senior at Case Western Reserve University ('25) pursuing majors in Computer
                Science and Mathematics. Throughout my journey I have developed an interest in
                developing and implementing high performant and energy efficient artificial
                intelligence algorithms. Most recently I have been working on a programming
                framework which enables users to select the algorithms that perform the operations
                in a deep neural network. I have created high performance implementations of many
                algorithms for this framework. Using the framework’s implementations often provides
                a 20% speedup over original models which solely use implementations from popular ML
                frameworks, e.g., PyTorch. I have created extremely fast command line tools and
                games, as well as a machine learning framework. My other projects include a mobile
                phone game, chat app, sorting visualizer and more. These projects can be seen on my{' '}
                <a target="_blank" href="https://github.com/4imothy">
                    GitHub
                </a>{' '}
                or in the project section below.
            </p>
        </div>
    );
};

export default AboutMeText;
