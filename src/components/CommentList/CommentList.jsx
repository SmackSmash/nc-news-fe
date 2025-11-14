import CommentCard from '../CommentCard/CommentCard';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const CommentList = ({ error, isLoading, data, setCommentData }) => {
  if (isLoading) return <Loading>Loading comments...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return data.comments.map(comment => (
      <CommentCard comment={comment} setCommentData={setCommentData} key={comment.comment_id} />
    ));
  }
};

export default CommentList;
