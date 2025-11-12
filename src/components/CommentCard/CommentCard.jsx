import { useState } from 'react';
import useQuery from '../../hooks/useQuery';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import PillLink from '../PillLink/PillLink';
import './CommentCard.css';

const CommentCard = ({ comment, refetch }) => {
  const { author, body, comment_id, created_at, votes } = comment;
  const date = new Date(Date.parse(created_at));

  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/users');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/comments/${comment_id}`, {
      method: 'DELETE'
    });
    refetch();
  };

  if (isLoading) return <Loading>Loading comment...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    const user = data.users.find(user => user.username === author);

    return (
      <article className='comment'>
        <div className='avatar'>
          <img src={user.avatar_url} alt={author} />
        </div>
        <p>{body}</p>
        <div className='commentMeta'>
          <PillLink to='' color='yellow'>
            {author}
          </PillLink>
          <span className='date'>
            {date.toLocaleDateString()} {date.toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' })}
          </span>
          <span className='likes'>{votes} likes</span>
          <button onClick={handleDelete} className='delete'>
            {isDeleting ? 'Deleting...' : 'Delete Comment'}
          </button>
        </div>
      </article>
    );
  }
};

export default CommentCard;
