import styles from './style.module.scss';
import ghIcon from '../../SharedIcons/githubIcon.png';
import ghHover from '../../SharedIcons/githubIconHover.png';

const Title = () => {
    return (
        <div className={styles.titleContainer}>
            <h1>Global Regex Expression Tree</h1>
        </div>
    );
};

const Content = () => {
    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <div className={styles.text}>
                <p>
                    Global Regex Expression Tree (<i>gret</i>) is a fast and popular command line
                    tool to search files.
                    <i> Gret</i> is similar to <i>grep</i> in that it takes a target directory or
                    file to search for text matching a regex expression. However, <i>gret</i> offers
                    many benefits. First it displays matches in a file tree with branches to
                    directories, subdirectories, files and matched lines. Second it can launch an
                    interactive window which launches a file at the line in the desired editor.
                    Third it is significantly faster than <i>grep</i>, benchmarking results can be
                    seen in the github repository at <i>./benchmarks/times</i>. Lastly
                    <i> gret</i> respects users <i>.gitignore</i> files and other methods of
                    ignoring files and directories.
                </p>
            </div>
            <div className={styles.text}>
                <iframe
                    title="Gret Demonstration"
                    className={styles.frame}
                    width={500}
                    height={300}
                    src="https://www.youtube.com/embed/oXBDTgcG_j0"
                />
                <br />
                <a href="https://github.com/4imothy/gret" target="_blank" rel="noreferrer">
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
        </div>
    );
};

const DefaultPage = () => {
    return (
        <div>
            <Title />
            <Content />
        </div>
    );
};

export default DefaultPage;
