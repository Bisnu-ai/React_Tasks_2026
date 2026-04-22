import React from 'react';
import UserProfile from './UserProfile';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <UserProfile username="Alice" age={28} isAdmin={true} />
      <UserProfile username="Bob" age={34} isAdmin={false} />
      <UserProfile username="Charlie" age={22} />
    </div>
  );
};

export default Dashboard;
