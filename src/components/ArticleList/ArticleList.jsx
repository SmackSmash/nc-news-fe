import { useState } from 'react';
import { useSearchParams } from 'react-router';
import ArticleCard from '../ArticleCard/ArticleCard';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import useQuery from '../../hooks/useQuery';
import SortButton from '../SortButton/SortButton';
import './ArticleList.css';

const ArticleList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'created_at');
  const [order, setOrder] = useState(searchParams.get('order') || 'desc');
  const { error, isLoading, data } = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles?sort_by=${sortBy}&order=${order}`
  );

  const handleSort = column => {
    if (sortBy === column) {
      setOrder(order === 'desc' ? 'asc' : 'desc');
    } else {
      setOrder('desc');
    }
    setSortBy(column);
    setSearchParams({ sort: column, order });
  };

  let html;

  if (isLoading) html = <Loading>Loading articles...</Loading>;

  if (error) html = <Error>{error.message}</Error>;

  if (data) {
    html = data.articles.map(article => <ArticleCard topicLink article={article} key={article.article_id} />);
  }

  return (
    <section id='articleList'>
      <div id='articleHeader'>
        <h1>All Articles</h1>
        <div id='filters'>
          <SortButton clickHandler={handleSort} column={'created_at'} sortBy={sortBy} order={order}>
            Added
          </SortButton>
          <SortButton clickHandler={handleSort} column={'title'} sortBy={sortBy} order={order}>
            Title
          </SortButton>
          <SortButton clickHandler={handleSort} column={'topic'} sortBy={sortBy} order={order}>
            Topic
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

export default ArticleList;
