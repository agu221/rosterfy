import React from 'react';
import styles from '../../styles/UpcomingMatchesCard.module.css';

const UpcomingMatchesCard = ({ matches }) => (
    <section className={`${styles.card} ${styles.full}`}>
        <h2>Upcoming Matches</h2>
        <ul>
            {matches.map((m) => (
                <li key={m.match}>{m.match} – {m.date}</li>
            ))}
        </ul>
    </section>
);

export default UpcomingMatchesCard;
