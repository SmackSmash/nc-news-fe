import { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://northcoders-news-be-f4oe.onrender.com/api/articles');
        const data = await response.json();
        setIsLoading(false);
        setArticles(data.articles);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        console.error(error.message);
      }
    })();
  }, []);

  if (isLoading) {
    return <section id='articleList'>Loading...</section>;
  }

  if (error) {
    return <section id='articleList'>{error.message}</section>;
  }

  return (
    <section id='articleList'>
      {articles.map(article => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </section>
  );
};

export default ArticleList;
