import React, { useRef, useEffect } from 'react';

const FocusForm = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
      <h2>Auto-Focus Form</h2>
      <p>The input below should be focused automatically when the page loads.</p>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="I will be focused!" 
          style={{ padding: '10px', width: '80%', maxWidth: '300px' }}
        />
        <input 
          type="text" 
          placeholder="I am just a normal input" 
          style={{ padding: '10px', width: '80%', maxWidth: '300px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
    </div>
  );
};

export default FocusForm;
