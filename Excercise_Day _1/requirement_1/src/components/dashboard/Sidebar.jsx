
function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h3 style={styles.title}>Menu</h3>
      <ul style={styles.list}>
        <li style={styles.item}>Dashboard</li>
        <li style={styles.item}>Profile</li>
        <li style={styles.item}>Settings</li>
        <li style={styles.item}>Reports</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#ecf0f1",
    padding: "20px",
    borderRight: "2px solid #bdc3c7",
    minHeight: "300px",
  },
  title: {
    color: "#2c3e50",
    marginTop: 0,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    padding: "10px 6px",
    cursor: "pointer",
    borderRadius: "4px",
    marginBottom: "4px",
    color: "#2c3e50",
    fontWeight: "500",
  },
};

export default Sidebar;
