import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackAdded = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ISU smart Feedback App</h1>
        <p>We value your opinion!</p>
      </header>
      <main className="main-content">
        <FeedbackForm onFeedbackAdded={handleFeedbackAdded} />
        <FeedbackList feedbacks={feedbacks} />
      </main>
    </div>
  );
}

export default App;
