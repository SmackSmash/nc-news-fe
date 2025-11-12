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

  const handleSelect = option => setUser(option);

  if (isLoading) return <Loading>Loading comment form...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return (
      <form id='addComment'>
        <Select options={data.users.map(user => user.username)} value={user} onChange={handleSelect} />
        <textarea name='' id=''></textarea>
        <Button>+ Add Comment</Button>
      </form>
    );
  }
};

export default CommentForm;
