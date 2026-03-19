function Navbar() {
  return (
    <div style={styles.nav}>
      <h1 style={styles.logo}>AVENGERS</h1>

      <div style={styles.menu}>
        <span>Home</span>
        <span>Heroes</span>
        <span>Movies</span>
        <span>About</span>
      </div>

      <div>
        <button style={styles.login}>Login</button>
        <button style={styles.signup}>Sign Up</button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#000",
    color: "white",
    alignItems: "center"
  },
  logo: { color: "red" },
  menu: { display: "flex", gap: "20px" },
  login: {
    marginRight: "10px",
    padding: "5px 10px",
    border: "1px solid white",
    background: "transparent",
    color: "white"
  },
  signup: {
    padding: "5px 10px",
    background: "green",
    color: "white",
    border: "none"
  }
};

export default Navbar;