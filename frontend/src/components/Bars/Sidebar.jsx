// Sidebar.jsx
import React from 'react';
import styles from '@/styles/Sidebar.module.css';

const Sidebar = () => (
    <aside className={styles.sidebar}>
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
