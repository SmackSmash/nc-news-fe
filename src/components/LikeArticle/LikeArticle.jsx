import { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from 'react-icons/fa';
import './LikeArticle.css';

const LikeArticle = ({ articleId, votes }) => {
  const [likes, setLikes] = useState(votes);
  const [touched, setTouched] = useState(false);
  const [likeTouched, setLikeTouched] = useState(false);
  const [dislikeTouched, setDislikeTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateVotes = async num => {
    setTouched(true);
    num ? setLikeTouched(true) : setDislikeTouched(true);
    setLikes(likes + num);
    try {
      await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inc_votes: num })
      });
    } catch (error) {
      setLikes(likes => likes - num);
      setError(error);
    }
  };

  return (
    <>
      <div id='likeArticle'>
        <button onClick={() => handleUpdateVotes(1)} disabled={touched} className={likeTouched ? 'likeTouched' : ''}>
          {likeTouched ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </button>
        <span>
          {/* {likes} like{likes !== 1 && 's'} */}
          {likes} like{likes !== 1 && 's'}
        </span>
        <button
          onClick={() => handleUpdateVotes(-1)}
          disabled={touched}
          className={dislikeTouched ? 'dislikeTouched' : ''}>
          {dislikeTouched ? <FaThumbsDown /> : <FaRegThumbsDown />}
        </button>
      </div>
      {error && <p id='likeError'>Something went wrong.</p>}
    </>
  );
};

export default LikeArticle;
