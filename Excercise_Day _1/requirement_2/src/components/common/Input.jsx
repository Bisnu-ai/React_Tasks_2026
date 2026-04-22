const Input = ({ placeholder }) => {
  return (
    <input 
      type="text"
      placeholder={placeholder}
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
        boxSizing: 'border-box'
      }}
    />
  );
};

export default Input;
