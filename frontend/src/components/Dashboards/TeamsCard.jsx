import React from 'react';
import styles from '@/styles/TeamsCard.module.css';

const TeamsCard = ({ teams }) => (
    <section className={styles.card}>
        <h2>Registered Teams</h2>
        <div className={styles.list}>
            {teams.map((t) => (
                <div key={t.name} className={styles.team}>
                    <h3>{t.name}</h3>
                    <p>{t.sport} • {t.league}</p>
                    <p>Next Match: {t.nextMatch}</p>
                </div>
            ))}
        </div>
    </section>
);

export default TeamsCard;
