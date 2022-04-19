import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Login from './pages/login.js';
import Navbar from "./Components/Navbar/index"
import Calender from './pages/calender.js';
import CreatePlanner from "./Components/CreatePlanner";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route path="/planner" element={<CreatePlanner/>}/>
                <Route path='/calender' element={<Calender/>} />
            </Routes>
        </Router>

    );
}

export default App;
