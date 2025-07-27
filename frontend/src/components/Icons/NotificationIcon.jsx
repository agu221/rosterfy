// NotificationIcon.jsx
import styles from '../../styles/icons/icons.module.css'

const NotificationIcon = ({ size = 32 }) => {
    return (

        <div className={styles.topRight}>
            <div
                className={styles.iconCircle}
                style={{
                    width: size,
                    height: size,
                }}
            >
                <div className={styles.userIcon}>
                    <div className={styles.bell}></div>
                    <div className={styles.clapper}></div>
                </div>
            </div>
        </div>
    );
};

export default NotificationIcon;
