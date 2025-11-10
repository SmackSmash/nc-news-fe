import { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://northcoders-news-be-f4oe.onrender.com/api/articles');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {}
    })();
  }, []);

  return (
    <section id='articleList'>
      {articles.map(article => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </section>
  );
};

export default ArticleList;
