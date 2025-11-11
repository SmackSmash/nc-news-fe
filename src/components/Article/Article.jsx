import { useParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import CommentList from '../CommentList/CommentList';
import Button from '../Button/Button';
import PillLink from '../PillLink/PillLink';
import './Article.css';

const Article = () => {
  const { articleId } = useParams();

  const [error, isLoading, data] = useQuery(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`);

  if (isLoading) return <Loading>Loading article...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    const { article_img_url, author, body, comment_count, created_at, title, topic, votes } = data.article;

    return (
      <div id='articleContainer'>
        <section id='article'>
          <PillLink to={`/topics/${topic}`} color='purple'>
            {topic}
          </PillLink>
          <h1>{title}</h1>
          <div id='articleImgContainer'>
            <img src={article_img_url} alt={title} />
          </div>
          <p>{body}</p>
          <PillLink to='' color='yellow'>
            {author}
          </PillLink>
        </section>
        <section id='addComment'>
          <Button>+ Add Comment</Button>
        </section>
        <CommentList articleId={articleId} />
      </div>
    );
  }
};

export default Article;
