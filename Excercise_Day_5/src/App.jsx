import { use, Suspense } from 'react';
import './App.css';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

function UserGallery() {
  const users = use(fetchUsers);

  return (
    <div className="gallery">
      {users.map((user) => (
        <div key={user.id} className="card">
          <div className="card-image-container">
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <h4><b>Name: {user.name}</b></h4>
          <div className="card-details">
            <p><b>Job Title:</b> {user.company.bs}</p>
            <p><b>Department:</b> {user.company.name}</p>
            <p><b>Office Phone:</b> {user.phone}</p>
            <p><b>Mobile:</b> {user.phone}</p>
            <p><b>Email:</b> {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <main>
      <h1> ISU User Gallery</h1>
      <Suspense fallback={<div className="loading">Loading users...</div>}>
        <UserGallery />
      </Suspense>
    </main>
  );
}

export default App;
