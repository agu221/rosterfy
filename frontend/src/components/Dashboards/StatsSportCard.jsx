import React from 'react';
import styles from '../../styles/StatsSportCard.module.css';

const StatsSportCard = ({ stats }) => (
    <section className={styles.card}>
        <h2>Stats by Sport</h2>
        <ul>
            {stats.map((s) => (
                <li key={s.sport}>{s.sport}: {s.count} games</li>
            ))}
        </ul>
    </section>
);

export default StatsSportCard;
