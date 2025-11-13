import { Link } from 'react-router';
import PillLink from '../PillLink/PillLink';
import './ArticleCard.css';

const ArticleCard = ({
  topicLink,
  article: { article_id, title, author, created_at, votes, article_img_url, comment_count, topic }
}) => {
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
            <span>
              {votes} Like{votes !== 1 && 's'}
            </span>
            <PillLink to='/users' color='yellow' margin>
              {author}
            </PillLink>
            <PillLink to={`/article/${article_id}?comments=true`} color='blue'>
              {comment_count} Comments
            </PillLink>
            {topicLink && (
              <PillLink to={`/topic/${topic}`} color='purple'>
                {topic}
              </PillLink>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
