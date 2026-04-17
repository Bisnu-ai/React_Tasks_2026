import React, { useState } from 'react';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Live Search Bar</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <div>
        <strong>Uppercase Output:</strong>
        <p style={{ minHeight: '1.5em', background: '#eee', padding: '10px' }}>{text.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default SearchBar;
