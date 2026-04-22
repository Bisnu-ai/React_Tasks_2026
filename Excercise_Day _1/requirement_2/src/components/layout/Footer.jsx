const Footer = () => {
  return (
    <footer style={{
      background: '#34495e',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
