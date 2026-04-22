import React, { useState } from 'react';

const SecretMessage = () => {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Conditional Rendering</h2>
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          checked={showSecret} 
          onChange={(e) => setShowSecret(e.target.checked)} 
        />
        Show Secret Message
      </label>

      {showSecret && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e6ffe6', border: '1px solid #00cc00', borderRadius: '5px' }}>
          The secret message is: <strong>ISERVEU provides a good work enviroment</strong>
        </div>
      )}
    </div>
  );
};

export default SecretMessage;
