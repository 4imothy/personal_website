import styles from './BaseIcon.module.scss';

const BaseIcon = ({Icon, Width}) => {
    return (
        <div className={styles.container}>
            <img style={{
                width: `${Width}%`,
            }} src={Icon} alt="Icon"/>
        </div>
    );
}

export default BaseIcon;