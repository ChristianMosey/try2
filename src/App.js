import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Login from './pages/login.js';
import Calender from './pages/calender.js';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/login' element={<Login/>} />
                <Route path='/calender' element={<Calender/>} />
            </Routes>
        </Router>
    );
}

export default App;
