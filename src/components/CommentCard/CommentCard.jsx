import './CommentCard.css';

const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <article>
      <h1>{comment.author}</h1>
      <p>{comment.body}</p>
    </article>
  );
};

export default CommentCard;
