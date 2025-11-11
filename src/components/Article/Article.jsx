import { useParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import CommentList from '../CommentList/CommentList';
import './Article.css';

const Article = () => {
  const { articleId } = useParams();

  const [error, isLoading, data] = useQuery(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`);

  if (isLoading) return <Loading>Loading topics...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return (
      <div id='articleContainer'>
        <section id='article'>
          <h1>{data.article.title}</h1>
          <p>{data.article.body}</p>
        </section>
        <CommentList articleId={articleId} />
      </div>
    );
  }
};

export default Article;
