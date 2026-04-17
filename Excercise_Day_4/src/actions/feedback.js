export async function submitFeedback(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  const rating = formData.get('rating');
  const comment = formData.get('comment');
  
  if (!rating || !comment) {
    return {
      success: false,
      error: 'Please provide both rating and comment',
      message: null,
      data: null
    };
  }

  return {
    success: true,
    error: null,
    message: 'Feedback submitted successfully!',
    data: { id: Date.now(), rating, comment }
  };
}
