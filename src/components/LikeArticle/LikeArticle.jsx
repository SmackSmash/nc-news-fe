import { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from 'react-icons/fa';
import './LikeArticle.css';

const LikeArticle = ({ articleId, votes }) => {
  const [likes, setLikes] = useState(votes);
  const [touched, setTouched] = useState(false);
  const [likeTouched, setLikeTouched] = useState(false);
  const [dislikeTouched, setDislikeTouched] = useState(false);

  const handleLike = async () => {
    setTouched(true);
    setLikeTouched(true);
    setLikes(likes + 1);
    await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inc_votes: 1 })
    });
  };

  const handleDislike = async () => {
    setTouched(true);
    setDislikeTouched(true);
    setLikes(likes - 1);
    await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inc_votes: -1 })
    });
  };

  return (
    <div id='likeArticle'>
      <button onClick={handleLike} disabled={touched} className={likeTouched ? 'likeTouched' : ''}>
        {likeTouched ? <FaThumbsUp /> : <FaRegThumbsUp />}
      </button>
      <span>
        {likes} like{likes !== 1 && 's'}
      </span>
      <button onClick={handleDislike} disabled={touched} className={dislikeTouched ? 'dislikeTouched' : ''}>
        {dislikeTouched ? <FaThumbsDown /> : <FaRegThumbsDown />}
      </button>
    </div>
  );
};

export default LikeArticle;
