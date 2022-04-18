import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
// stateless functional component creation
const Navbar = () => {
  return (
    <nav className="navbar">
      <span>Clock UP</span>
      <span className="links">
        <a href="/">View Existing Schedule </a>
        <a href="/create"> Create New Schedule</a>
      </span>
    </nav>
  );
};

export default Navbar;
