import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 style={{ color: "red" }}>AVENGERS</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Heroes</li>
        <li>Movies</li>
        <li>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-fill">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;