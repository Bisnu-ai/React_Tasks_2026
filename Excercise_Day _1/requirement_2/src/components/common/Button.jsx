const Button = ({ label, color, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        backgroundColor: color || '#3498db',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
