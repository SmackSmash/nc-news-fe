import ArticleCard from '../ArticleCard/ArticleCard';
import useQuery from '../../hooks/useQuery';
import './ArticleList.css';

const ArticleList = () => {
  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/articles');

  if (isLoading) {
    return <section id='articleList'>Loading...</section>;
  }

  if (error) {
    return <section id='articleList'>{error.message}</section>;
  }

  if (data) {
    return (
      <section id='articleList'>
        {data.articles.map(article => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </section>
    );
  }
};

export default ArticleList;
