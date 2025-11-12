import { useState } from 'react';
import useQuery from '../../hooks/useQuery';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Select from '../Select/Select';
import Button from '../Button/Button';
import './CommentForm.css';

const CommentForm = ({ articleId }) => {
  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/users');
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState('');
  const [validate, setValidate] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = option => setUser(option);

  const handleSubmit = async e => {
    e.preventDefault();
    setValidate(true);
    try {
      const response = await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: user, body: comment })
      });
      const json = await response.json();
      setIsSubmitting(true);
      if (json.error) throw new Error({ message: 'Error submitting form' });
      setSubmitted(true);
    } catch (error) {
      setIsSubmitting(false);
      setSubmissionError(error);
    }
  };

  if (isLoading) return <Loading>Loading comment form...</Loading>;

  if (isSubmitting) return <Loading>Submitting comment...</Loading>;

  if (error || submissionError) return <Error>{error.message || submissionError.message}</Error>;

  if (submitted) {
    return (
      <div id='addComment'>
        <h3>Thanks for commenting!</h3>
      </div>
    );
  }

  if (data) {
    return (
      <form onSubmit={handleSubmit} id='addComment'>
        <div id='addCommentHeader'>
          <h3>Have your say</h3>
          {validate && !user && <span className='error'>Please select a user</span>}
          <Select options={data.users.map(user => user.username)} value={user} onChange={handleSelect} />
        </div>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          name='comment'
          id='comment'
          placeholder='Write your comment here...'></textarea>
        {validate && !comment && <span className='error'>Please enter a comment</span>}
        <Button>+ Add Comment</Button>
      </form>
    );
  }
};

export default CommentForm;
