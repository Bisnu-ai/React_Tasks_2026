const Navbar = () => {
  return (
    <nav style={{
      background: '#2c3e50',
      color: 'white',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h2 style={{ margin: 0 }}>My App</h2>
      <div>
        <span style={{ marginRight: '15px', cursor: 'pointer' }}>Home</span>
        <span style={{ cursor: 'pointer' }}>About</span>
      </div>
    </nav>
  );
};

export default Navbar;
