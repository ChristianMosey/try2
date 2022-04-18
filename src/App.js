import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Login from './pages/login.js';
import Calender from './pages/calender.js';
import CreatePlanner from "./Components/CreatePlanner";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route path='/calender' element={<Calender/>} />
                <Route path="/planner" element={<CreatePlanner/>}/>
            </Routes>
        </Router>
    );
}

export default App;
