import React from 'react';

const JSXDemo = () => {
  const name = "Bisnu";
  const element = <h1 className="title">Welcome, {name}!</h1>;
  
 
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '8px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      
      {element}
      
      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' }} />
      
      <h3>Exercise: Date Object in JSX</h3>
     
      <p style={{ fontSize: '18px' }}>
        The current year is: <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>{currentYear}</span>
      </p>
    </div>
  );
};

export default JSXDemo;
