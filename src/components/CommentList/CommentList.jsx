import useQuery from '../../hooks/useQuery';
import CommentCard from '../CommentCard/CommentCard';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const CommentList = ({ articleId }) => {
  const [error, isLoading, data, refetch] = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}/comments`
  );

  if (isLoading) return <Loading>Loading comments...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return data.comments.map(comment => <CommentCard comment={comment} refetch={refetch} key={comment.comment_id} />);
  }
};

export default CommentList;
