// UserIcon.jsx
import styles from '../../styles/icons/icons.module.css';
const UserIcon = ({ size = 32 }) => {
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
                    <div className={styles.head}></div>
                    <div className={styles.body}></div>
                </div>
            </div>
        </div>
    );
};

export default UserIcon;
