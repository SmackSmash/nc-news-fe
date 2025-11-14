import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const Comments = ({ articleId }) => {
  const [params] = useSearchParams();
  const [isScrollable, setIsScrollable] = useState(true);

  const {
    error,
    isLoading,
    data,
    setData: setCommentData
  } = useQuery(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}/comments`);

  const commentsRef = useRef(null);

  useEffect(() => {
    if (params.get('comments') && data && isScrollable) {
      setIsScrollable(false);

      setTimeout(() => {
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [params, data, isScrollable]);

  return (
    <>
      <CommentForm articleId={articleId} setCommentData={setCommentData} />
      <section id='comments' ref={commentsRef}>
        <CommentList
          articleId={articleId}
          error={error}
          isLoading={isLoading}
          data={data}
          setCommentData={setCommentData}
        />
      </section>
    </>
  );
};

export default Comments;
