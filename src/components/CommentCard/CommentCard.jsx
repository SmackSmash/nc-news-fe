import { useState } from 'react';
import useQuery from '../../hooks/useQuery';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import PillLink from '../PillLink/PillLink';
import formatDate from '../../utils/formatDate';
import './CommentCard.css';

const CommentCard = ({ comment, setCommentData }) => {
  const { author, body, comment_id, created_at, votes } = comment;

  const { error, isLoading, data } = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/users');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/comments/${comment_id}`, {
      method: 'DELETE'
    });
    setCommentData(currentComments => {
      return { comments: currentComments.comments.filter(comment => comment.comment_id !== comment_id) };
    });
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
        <PillLink to='/users' color='yellow'>
          {author}
        </PillLink>
        <span className='date'>{formatDate(created_at)}</span>
        <p>{body}</p>
        <div className='commentMeta'>
          <span className='likes'>{votes} likes</span>
          <button onClick={handleDelete} className='delete'>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </article>
    );
  }
};

export default CommentCard;
