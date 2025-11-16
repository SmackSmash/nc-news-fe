import { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from 'react-icons/fa';
import './LikeArticle.css';

const LikeArticle = ({ votes, updateArticleVotes, voteError }) => {
  const [touched, setTouched] = useState(false);
  const [likeTouched, setLikeTouched] = useState(false);
  const [dislikeTouched, setDislikeTouched] = useState(false);

  const handleUpdateVotes = async num => {
    setTouched(true);
    num > 0 ? setLikeTouched(true) : setDislikeTouched(true);
    updateArticleVotes(num);
  };

  return (
    <>
      <div id='likeArticle'>
        <span>
          {votes} like{votes !== 1 && 's'}
        </span>
        <button
          onClick={() => handleUpdateVotes(1)}
          disabled={touched}
          className={likeTouched && !voteError ? 'likeTouched' : ''}>
          {likeTouched ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </button>
        <button
          onClick={() => handleUpdateVotes(-1)}
          disabled={touched}
          className={dislikeTouched && !voteError ? 'dislikeTouched' : ''}>
          {dislikeTouched ? <FaThumbsDown /> : <FaRegThumbsDown />}
        </button>
      </div>
      {voteError && <p id='likeError'>Something went wrong.</p>}
    </>
  );
};

export default LikeArticle;
