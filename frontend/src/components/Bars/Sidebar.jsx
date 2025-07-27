// Sidebar.jsx
import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import logo from "../../assets/logo.png"
const Sidebar = () => (
    <aside className={styles.sidebar}>
        <img src={logo} alt='Rosterfy Logo' className={styles.logo}></img>
        <div className={styles.logo}>Rosterfy</div>
        <nav>
            {['Home', 'Teams', 'Stats', 'Friends', 'Schedule', 'Settings'].map((item) => (
                <a href="#" key={item} className={item === 'Home' ? styles.active : ''}>
                    {item}
                </a>
            ))}
        </nav>
    </aside>
);

export default Sidebar;
