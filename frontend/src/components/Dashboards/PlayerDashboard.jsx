import React from 'react';
import Sidebar from '@/components/Bars/Sidebar';
import Topbar from '@/components/Bars/Topbar';
import TeamsCard from './TeamsCard';
import StatsLeagueCard from './StatsLeagueCard';
import StatsSportCard from './StatsSportCard';
import FriendsCard from './FriendsCard';
import UpcomingMatchesCard from './UpcomingMatchesCard';

import {
    teams, statsLeague, statsSport, friends, upcoming
} from '@/data/dashboardData';

import styles from '@/styles/Dashboard.module.css';

const Dashboard = () => (
    <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.main}>
            <Topbar />
            <div className={styles.grid}>
                <TeamsCard teams={teams} />
                <StatsLeagueCard stats={statsLeague} />
                <StatsSportCard stats={statsSport} />
                <FriendsCard friends={friends} />
                <UpcomingMatchesCard matches={upcoming} />
            </div>
        </div>
    </div>
);

export default Dashboard;
