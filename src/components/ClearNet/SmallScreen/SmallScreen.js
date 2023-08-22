import styles from './style.module.scss';
import ghIcon from '../../SharedIcons/githubIcon.png';
import ghHover from '../../SharedIcons/githubIconHover.png';

function Title() {
    return (
        <div className={styles.title}>
            <p>Clear Net</p>
        </div>
    );
}

function Text() {
    return (
        <div className={styles.text}>
            <p>
                <a
                    href="https://github.com/4imothy/clear_net/tree/main/clear_net.h"
                    target="_blank"
                >
                    Clear Net
                </a>{' '}
                is a{' '}
                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                    C
                </a>{' '}
                library for creating and training vanilla and convolutional neural nets whose only
                dependency is <i>C</i> itself. Its name comes from the words <i>C</i> (the language
                used), learn and net put together. The library provides many optimiziation methods
                and training strategies to combat vanishing gradient descent and dead neurons. The
                library also has a simple interface to tune hyperparameters and create layers. There
                are many examples in the{' '}
                <a
                    href="https://github.com/4imothy/clear_net/tree/main/examples"
                    target="_blank"
                    rel="noreferrer"
                >
                    github repository.
                </a>{' '}
                of the library being applied to popular machine learning problems like the{' '}
                <i>MNIST</i> database.
            </p>

            <a href="https://github.com/4imothy/clear_net" target="_blank" rel="noreferrer">
                <img
                    className={styles.appIcon}
                    src={ghIcon}
                    alt={'See On GitHub'}
                    onMouseOver={(e) => {
                        e.currentTarget.src = ghHover;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = ghIcon;
                    }}
                />
            </a>
        </div>
    );
}

function Demo() {
    return (
        <div className={styles.demoContainer}>
            <iframe
                title="Clear Net Demo"
                className={styles.demo}
                width={500}
                height={500}
                src="https://www.youtube.com/embed/fAFYYygTzzk"
            />
        </div>
    );
}

const SmallPage = () => {
    return (
        <>
            <Title />
            <Text />
            <Demo />
        </>
    );
};

export default SmallPage;
