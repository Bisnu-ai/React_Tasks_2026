function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',
        opacity: 0.95,
        letterSpacing: '0.5px',
      }}
    >
      © {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  )
}

export default Footer
