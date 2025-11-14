import { useParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import formatDate from '../../utils/formatDate';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Comments from '../Comments/Comments';
import PillLink from '../PillLink/PillLink';
import LikeArticle from '../LikeArticle/LikeArticle';
import './Article.css';

const Article = () => {
  const { articleId } = useParams();

  const { error, isLoading, data } = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`
  );

  if (isLoading) return <Loading>Loading article...</Loading>;

  if (error) return <Error>{error.message}</Error>;

  if (data) {
    const { article_img_url, author, body, created_at, title, topic, votes } = data.article;

    return (
      <div id='articleContainer'>
        <section id='article'>
          <h1>{title}</h1>
          <div id='articleMeta'>
            <span className='date'>{formatDate(created_at)}</span>
            <PillLink to='/users' color='yellow'>
              {author}
            </PillLink>
            <PillLink to={`/topic/${topic}`} color='purple'>
              {topic}
            </PillLink>
          </div>
          <div id='articleImgContainer'>
            <img src={article_img_url} alt={title} />
          </div>
          <p>{body}</p>
          <LikeArticle articleId={articleId} votes={votes} />
        </section>
        <Comments articleId={articleId} />
      </div>
    );
  }
};

export default Article;
