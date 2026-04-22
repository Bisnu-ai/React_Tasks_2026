import React from 'react';

const UserProfile = ({ username, age, isAdmin = false }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      <h3>User Profile</h3>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Status:</strong> {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
};

export default UserProfile;
