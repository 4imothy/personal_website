import styles from './style.module.scss';

const EmbeddedPlay = () => {
    return (
        <div>
            <iframe title="Fishy Feeder Game" src="https://4tlc.github.io/fishyfeeder/" className={styles.embeddedPlay} />
        </div>
    );
}

export default EmbeddedPlay;