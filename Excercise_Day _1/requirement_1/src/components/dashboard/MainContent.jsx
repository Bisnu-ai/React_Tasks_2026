

function MainContent() {
  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>Welcome to the Dashboard! </h2>
      <p style={styles.paragraph}>
        This is the main content area. You can display cards, tables,
        charts, or any other information here.
      </p>

      {/* Stats Cards */}
      <div style={styles.cardRow}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Users</h3>
          <p style={styles.cardNumber}>1,240</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Orders</h3>
          <p style={styles.cardNumber}>380</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Revenue</h3>
          <p style={styles.cardNumber}>$9,800</p>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    flex: 1,
    padding: "24px",
  },
  heading: {
    color: "#2c3e50",
    marginTop: 0,
  },
  paragraph: {
    color: "#7f8c8d",
    lineHeight: "1.6",
  },
  cardRow: {
    display: "flex",
    gap: "16px",
    marginTop: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    background: "#3498db",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    flex: "1",
    minWidth: "120px",
    textAlign: "center",
  },
  cardTitle: {
    margin: 0,
    fontSize: "16px",
  },
  cardNumber: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "8px 0 0 0",
  },
};

export default MainContent;
