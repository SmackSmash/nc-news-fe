import { useState, useOptimistic, startTransition } from 'react';
import { useParams } from 'react-router';
import useQuery from '../../hooks/useQuery';
import formatDate from '../../utils/formatDate';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Comments from '../Comments/Comments';
import PillLink from '../PillLink/PillLink';
import Image from '../Image/Image';
import LikeArticle from '../LikeArticle/LikeArticle';
import './Article.css';

const Article = () => {
  const { articleId } = useParams();

  const { error, isLoading, data, setData } = useQuery(
    `https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`
  );
  const [optimisticData, setOptimisticData] = useOptimistic(data);
  const [voteError, setVoteError] = useState(null);

  const updateArticleVotes = num => {
    const updatedArticle = structuredClone(data);
    updatedArticle.article.votes += num;
    startTransition(async () => {
      setOptimisticData(updatedArticle);
      try {
        const response = await fetch(`https://northcoders-news-be-f4oe.onrender.com/api/articles/${articleId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ inc_votes: num })
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setVoteError(error);
      }
    });
  };

  if (isLoading) return <Loading>Loading article...</Loading>;

  if (error) return <Error>{error.message}</Error>;

  if (optimisticData && optimisticData.article) {
    const { article_img_url, author, body, created_at, title, topic, votes } = optimisticData.article;

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
            <Image src={article_img_url} alt={title} />
          </div>
          <p>{body}</p>
          <LikeArticle votes={votes} updateArticleVotes={updateArticleVotes} voteError={voteError} />
        </section>
        <Comments articleId={articleId} />
      </div>
    );
  }
};

export default Article;
