import { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const Comments = ({ articleId }) => {
  const [params] = useSearchParams();

  const [error, isLoading, data, refetch] = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}/comments`
  );

  const commentsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (params.get('comments')) commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 30);
  }, [params, isLoading]);

  return (
    <section id='comments' ref={commentsRef}>
      <CommentForm articleId={articleId} refetch={refetch} />
      <CommentList articleId={articleId} error={error} isLoading={isLoading} data={data} refetch={refetch} />
    </section>
  );
};

export default Comments;
