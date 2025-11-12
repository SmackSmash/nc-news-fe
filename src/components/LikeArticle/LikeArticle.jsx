import { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa';
import './LikeArticle.css';

const LikeArticle = ({ articleId, votes }) => {
  const [likes, setLikes] = useState(votes);
  const [touched, setTouched] = useState(false);

  const handleClick = async () => {
    setTouched(true);
    setLikes(likes + 1);
    const response = await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inc_votes: 1 })
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <div id='likeArticle'>
      <span>
        {likes} like{likes !== 1 && 's'}
      </span>
      <button onClick={handleClick} disabled={touched} className={touched ? 'touched' : ''}>
        {touched ? <FaThumbsUp /> : <FaRegThumbsUp />}
      </button>
    </div>
  );
};

export default LikeArticle;
