import { Link } from 'react-router';
import PillLink from '../PillLink/PillLink';
import './ArticleCard.css';

const ArticleCard = ({ article: { article_id, title, author, created_at, votes, article_img_url, comment_count } }) => {
  const date = new Date(Date.parse(created_at));

  return (
    <article className='articleCard'>
      <div className='articleCardContent'>
        <div className='articleImgContainer'>
          <img src={article_img_url} alt={title} />
        </div>
        <div className='articleContentContainer'>
          <Link to={`/article/${article_id}`}>{title}</Link>
          <span className='date'>
            {date.toLocaleDateString()} {date.toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' })}
          </span>
          <div className='articlePillContainer'>
            <PillLink to='' color='yellow'>
              {author}
            </PillLink>
            <PillLink to='' color='blue' margin>
              {comment_count} Comments
            </PillLink>
            <PillLink to='' color='green'>
              {votes} Votes
            </PillLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
