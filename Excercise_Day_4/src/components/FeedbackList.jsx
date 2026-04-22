import './FeedbackList.css';

export default function FeedbackList({ feedbacks }) {
  if (!feedbacks || feedbacks.length === 0) {
    return (
      <div className="feedback-list-container empty">
        <p>No feedback submitted yet. Be the first!</p>
      </div>
    );
  }

  return (
    <div className="feedback-list-container">
      <h3>Recent Feedback</h3>
      <ul className="feedback-list">
        {feedbacks.map((fb) => (
          <li key={fb.id} className="feedback-item">
            <div className="feedback-header">
              <span className="rating-badge">★ {fb.rating}</span>
            </div>
            <p className="feedback-comment">{fb.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
