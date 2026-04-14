// Dashboard.jsx - Requirement 1
// This is the parent component that holds THREE sub-components:
//  1. Sidebar      - navigation on the left
//  2. MainContent  - the main working area
//  3. StatusFooter - status bar at the bottom

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import StatusFooter from "./StatusFooter";

function Dashboard() {
  return (
    <div style={styles.wrapper}>
      
      <div style={styles.row}>
        <Sidebar />
        <MainContent />
      </div>

      <StatusFooter />
    </div>
  );
}

const styles = {
  wrapper: {
    border: "2px solid #bdc3c7",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "20px",
    backgroundColor: 'white'
  },
  row: {
    display: "flex",
  },
};

export default Dashboard;
