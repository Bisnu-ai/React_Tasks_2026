function Header() {
  return (
    <header
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <span style={{ fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px' }}>
        iseRveu
      </span>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
