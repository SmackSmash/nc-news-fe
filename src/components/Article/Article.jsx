import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Article.css';

const Article = () => {
  const { articleId } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`);
        const data = await response.json();
        setArticle(data.article);
        console.log(data.article);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <section id='article'>Article works</section>;
};

export default Article;
