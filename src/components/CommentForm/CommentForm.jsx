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

  const handleSelect = option => setUser(option);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ user, comment });
  };

  if (isLoading) return <Loading>Loading comment form...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return (
      <form onSubmit={handleSubmit} id='addComment'>
        <div id='addCommentHeader'>
          <h3>Add a Comment</h3>
          <Select options={data.users.map(user => user.username)} value={user} onChange={handleSelect} />
        </div>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          name='comment'
          id='comment'
          placeholder='Write your commet here'></textarea>
        <Button>+ Add Comment</Button>
      </form>
    );
  }
};

export default CommentForm;
