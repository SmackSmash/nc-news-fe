import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const Comments = ({ articleId }) => {
  return (
    <>
      <CommentForm articleId={articleId} />
      <CommentList articleId={articleId} />
    </>
  );
};

export default Comments;
