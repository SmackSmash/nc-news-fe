import useQuery from '../../hooks/useQuery';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const Comments = ({ articleId }) => {
  const [error, isLoading, data, refetch] = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}/comments`
  );
  return (
    <>
      <CommentForm articleId={articleId} refetch={refetch} />
      <CommentList articleId={articleId} error={error} isLoading={isLoading} data={data} refetch={refetch} />
    </>
  );
};

export default Comments;
