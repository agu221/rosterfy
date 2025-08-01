// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboards/PlayerDashboard';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {<Route path="/register" element={<Register />} />}
                <Route path="/player_dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
