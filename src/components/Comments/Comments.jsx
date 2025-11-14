import { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const Comments = ({ articleId }) => {
  const [params] = useSearchParams();

  const {
    error,
    isLoading,
    data,
    setData: setCommentData,
    refetch
  } = useQuery(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}/comments`);

  const commentsRef = useRef(null);

  useEffect(() => {
    let ignore = false;

    setTimeout(() => {
      if (params.get('comments') && data && !ignore) {
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        ignore = true;
      }
    }, 500);
  }, [params, data]);

  return (
    <>
      <CommentForm articleId={articleId} setCommentData={setCommentData} />
      <section id='comments' ref={commentsRef}>
        <CommentList articleId={articleId} error={error} isLoading={isLoading} data={data} refetch={refetch} />
      </section>
    </>
  );
};

export default Comments;
