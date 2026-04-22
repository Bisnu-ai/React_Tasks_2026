import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitFeedback } from '../actions/feedback';
import './FeedbackForm.css';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="submit-btn">
      {pending ? 'Submitting...' : 'Submit Feedback'}
    </button>
  );
}

export default function FeedbackForm({ onFeedbackAdded }) {
  const formRef = useRef(null);
  const [state, formAction] = useActionState(async (prevState, formData) => {
    const result = await submitFeedback(prevState, formData);
    
    if (result.success) {
      onFeedbackAdded(result.data);
    }
    
    return result;
  }, null);

  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className="feedback-form-container">
      <h2>Provide Your Feedback</h2>
      <form ref={formRef} action={formAction} className="feedback-form">
        <div className="form-group">
          <label>Rating (1-5):</label>
          <input type="number" name="rating" min="1" max="5" placeholder="5" required />
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea name="comment" rows="4" placeholder="Your experience..." required></textarea>
        </div>
        {state?.error && <div className="error-message">{state.error}</div>}
        {state?.success && <div className="success-message">{state.message}</div>}
        <SubmitButton />
      </form>
    </div>
  );
}
