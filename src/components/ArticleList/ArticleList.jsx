import ArticleCard from '../ArticleCard/ArticleCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import useQuery from '../../hooks/useQuery';
import './ArticleList.css';

const ArticleList = () => {
  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/articles');

  if (isLoading) return <Loading>Loading articles...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return (
      <section id='articleList'>
        <h1>Top Articles</h1>
        {data.articles.map(article => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </section>
    );
  }
};

export default ArticleList;
