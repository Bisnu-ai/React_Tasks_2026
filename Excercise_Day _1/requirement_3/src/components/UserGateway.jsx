import React, { useState } from 'react';
import AdminPanel from './AdminPanel';

const UserGateway = () => {
  const [user, setUser] = useState({ name: 'Bisnu', role: 'admin', status: 'active' });

  const toggleStatus = () => {
    setUser(prev => ({ ...prev, status: prev.status === 'active' ? 'suspended' : 'active' }));
  };

  const toggleRole = () => {
    setUser(prev => ({ ...prev, role: prev.role === 'admin' ? 'user' : 'admin' }));
  };

  let content;

  if (user.status === 'suspended') {
    content = (
      <div style={{ backgroundColor: '#f39c12', padding: '15px', borderRadius: '5px', color: '#fff' }}>
        <strong>Warning:</strong> Your account is suspended. Please contact support.
      </div>
    );
  } else if (user.role === 'admin') {
    content = <AdminPanel />;
  } else {
    content = (
      <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '5px' }}>
        <h2>Welcome, {user.name}!</h2>
        <p>This is the standard user interface.</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '10px', background: '#ecf0f1', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span style={{ marginRight: 'auto' }}>Current User: <strong>{user.name}</strong> ({user.role}, {user.status})</span>
        <button onClick={toggleStatus} style={{ padding: '5px 10px', cursor: 'pointer' }}>Toggle Status</button>
        <button onClick={toggleRole} style={{ padding: '5px 10px', cursor: 'pointer' }}>Toggle Role</button>
      </div>
      {content}
    </div>
  );
};

export default UserGateway;
