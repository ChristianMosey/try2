// stateless functional component creation
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Clock UP</h1>
      <div className="links">
        <a href="/">View Existing Schedule | </a>
        <a href="/create"> Create New Schedule</a>
      </div>
    </nav>
  );
};

export default Navbar;
