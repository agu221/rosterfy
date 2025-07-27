import avatar_img from "../../src/assets/avatar.png"
export const user = {
    name: 'Jordan Smith',
    avatar: avatar_img
};
export const teams = [
    { name: 'Red Hawks', sport: 'Soccer', league: 'League A', nextMatch: 'July 21' },
    { name: 'Blue Raptors', sport: 'Basketball', league: 'League B', nextMatch: 'July 24' },
];

export const statsLeague = [
    { league: 'League A', games: 12, goals: 7, assists: 3 },
    { league: 'League B', games: 8, points: 95, rebounds: 14 },
];

export const statsSport = [
    { sport: 'Soccer', count: 20 },
    { sport: 'Basketball', count: 8 },
    { sport: 'Rugby', count: 3 },
];

export const friends = [
    { name: 'Alex', avatar: '/assets/f1.png', online: true },
    { name: 'Jamie', avatar: '/assets/f2.png', online: false },
    { name: 'Sam', avatar: '/assets/f3.png', online: true },
];

export const upcoming = [
    { match: 'Red Hawks vs Green Wolves', date: 'July 21' },
    { match: 'Blue Raptors vs Heatwave', date: 'July 24' },
];
