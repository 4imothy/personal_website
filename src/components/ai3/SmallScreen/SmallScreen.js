import styles from './style.module.scss';
import ghIcon from '../../SharedIcons/githubIcon.png';
import ghHover from '../../SharedIcons/githubIconHover.png';

function Title() {
    return (
        <div className={styles.title}>
            <p>ai3</p>
        </div>
    );
}

function Text() {
    return (
        <div className={styles.text}>
            <p>
                The{' '}
                <a href="https://github.com/KLab-ai3/ai3" target="_blank">
                    ai3
                </a>{' '}
                (Algorithmic Innovations for Accelerated Implementations of Artificial Intelligence)
                framework provides easy-to-use fine-grain algorithmic control over an existing DNN.
                ai3 contains built-in high performance implementations of common deep learning
                operations and methods by which users can implement their own algorithms in C++. ai3
                incurs no additional performance overhead, meaning that performance depends solely
                on the algorithms chosen by the user. More information and the performance of the
                framework are visible on the{' '}
                <a href="https://github.com/KLab-ai3/ai3" target="_blank">
                    GitHub
                </a>{' '}
                or on the{' '}
                <a href="https://klab-ai3.github.io/ai3/0.1.0/" target="_blank">
                    documentation
                </a>{' '}
            </p>
            <a href="https://github.com/KLab-ai3/ai3" target="_blank" rel="noreferrer">
                <img
                    className={styles.icon}
                    src={ghIcon}
                    alt={'See On GitHub'}
                    onMouseOver={(e) => {
                        e.currentTarget.src = ghHover;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = ghIcon;
                    }}
                    style={{
                        left: '0%',
                    }}
                />
            </a>
        </div>
    );
}

const SmallPage = () => {
    return (
        <>
            <Title />
            <Text />
        </>
    );
};

export default SmallPage;
