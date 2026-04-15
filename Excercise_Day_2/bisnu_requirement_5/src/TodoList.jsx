import React, { useState } from 'react';

const TodoList = () => {
  const initialTasks = [
    { id: 1, task: 'Learn React Props' },
    { id: 2, task: 'Master useState' },
    { id: 3, task: 'Understand Conditional Rendering' },
    { id: 4, task: 'Build an Awesome App' }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'left' }}>
      <h2>My Todo List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #eee'
            }}
          >
            <span>{item.task}</span>
            <button style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
