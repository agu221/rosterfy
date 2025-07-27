import React from 'react';
import styles from '../../styles/FriendsCard.module.css';


const FriendsCard = ({ friends }) => (
    <section className={styles.card}>
        <h2>Friends</h2>
        <ul className={styles.list}>
            {friends.map((f) => (
                <li key={f.name} className={styles.friend}>
                    <img src={f.avatar} alt={f.name} />
                    {f.name} ({f.online ? '🟢 Online' : '⚫ Offline'})
                </li>
            ))}
        </ul>
    </section>
);

export default FriendsCard;
