

function StatusFooter() {
  return (
    <div style={styles.footer}>
      <span style={styles.dot}></span>
      <span style={styles.text}>System Status: All services running normally</span>
      <span style={styles.time}>Last updated: just now</span>
    </div>
  );
}

const styles = {
  footer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#dff9fb",
    borderTop: "2px solid #00b894",
    padding: "12px 20px",
    fontSize: "14px",
    color: "#2c3e50",
  },
  dot: {
    width: "10px",
    height: "10px",
    background: "#00b894",
    borderRadius: "50%",
    display: "inline-block",
  },
  text: {
    flex: 1,
    fontWeight: "500",
  },
  time: {
    color: "#7f8c8d",
    fontSize: "12px",
  },
};

export default StatusFooter;
