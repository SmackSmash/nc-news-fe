import PillLink from '../PillLink/PillLink';
import './ArticleCard.css';

const ArticleCard = ({ article: { title, author, created_at, votes, article_img_url, comment_count } }) => {
  const date = new Date(Date.parse(created_at));

  console.log(date);

  return (
    <article className='articleCard'>
      <div className='articleCardVoter'></div>
      <div className='articleCardContent'>
        <div className='articleImgContainer'>
          <img src={article_img_url} alt={title} />
        </div>
        <div className='articleContentContainer'>
          <h2>{title}</h2>
          <span className='date'>
            {date.toLocaleDateString()} {date.toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric' })}
          </span>
          <div className='articlePillContainer'>
            <PillLink color='yellow'>{author}</PillLink>
            <PillLink color='blue' margin>
              {comment_count} Comments
            </PillLink>
            <PillLink color='green'>{votes} Votes</PillLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
