import styles from './style.module.scss';

const VideoPlayer = () => {
    return (
        <iframe
            title="Meteor Fingers Gameplay"
            className={styles.video}
            width={500}
            height={500}
            src="https://www.youtube.com/embed/wVXMR2u8bO4"
        />
    );
};

export default VideoPlayer;
