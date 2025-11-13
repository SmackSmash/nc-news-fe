import { useState } from 'react';
import { useParams } from 'react-router';
import ArticleCard from '../ArticleCard/ArticleCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import useQuery from '../../hooks/useQuery';
import SortButton from '../SortButton/SortButton';
import './TopicList.css';

const TopicList = () => {
  const { topicSlug } = useParams();

  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState('desc');
  const [error, isLoading, data] = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles?topic=${topicSlug}&sort_by=${sortBy}&order=${order}`
  );

  const handleSort = column => {
    if (sortBy === column) {
      setOrder(order === 'desc' ? 'asc' : 'desc');
    } else {
      setOrder('desc');
    }
    setSortBy(column);
  };

  let html;

  if (isLoading) html = <Loading>Loading articles...</Loading>;

  if (error) html = <Error>{error}</Error>;

  if (data) {
    html = data.articles.map(article => <ArticleCard article={article} key={article.article_id} />);
  }

  return (
    <section id='articleList'>
      <div id='articleHeader'>
        <h1>{topicSlug[0].toUpperCase() + topicSlug.slice(1)} Articles</h1>
        <div id='filters'>
          <SortButton clickHandler={handleSort} column={'created_at'} sortBy={sortBy} order={order}>
            Added
          </SortButton>
          <SortButton clickHandler={handleSort} column={'title'} sortBy={sortBy} order={order}>
            Title
          </SortButton>
          <SortButton clickHandler={handleSort} column={'author'} sortBy={sortBy} order={order}>
            Author
          </SortButton>
          <SortButton clickHandler={handleSort} column={'comment_count'} sortBy={sortBy} order={order}>
            Comments
          </SortButton>
          <SortButton clickHandler={handleSort} column={'votes'} sortBy={sortBy} order={order}>
            Likes
          </SortButton>
        </div>
      </div>
      {html}
    </section>
  );
};

export default TopicList;
