// Topbar.jsx
import React from 'react';
import { user } from '@/data/dashboardData';
import styles from '@/styles/Topbar.module.css';

const Topbar = () => (
    <header className={styles.topbar}>
        <div className={styles.welcome}>Welcome, {user.name}</div>
        <div className={styles.right}>
            <img src={user.avatar} alt="Profile" className={styles.avatar} />
            <span className={styles.notification}>🔔</span>
        </div>
    </header>
);

export default Topbar;
