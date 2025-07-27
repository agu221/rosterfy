import React from 'react';
import styles from '../../styles/StatsLeagueCard.module.css';

const StatsLeagueCard = ({ stats }) => (
    <section className={styles.card}>
        <h2>Stats by League</h2>
        <div className={styles.row}>
            {stats.map((s) => (
                <div key={s.league} className={styles.stat}>
                    <h4>{s.league}</h4>
                    {Object.entries(s).map(([k, v]) =>
                        k !== 'league' ? <p key={k}>{k.charAt(0).toUpperCase() + k.slice(1)}: {v}</p> : null
                    )}
                </div>
            ))}
        </div>
    </section>
);

export default StatsLeagueCard;
