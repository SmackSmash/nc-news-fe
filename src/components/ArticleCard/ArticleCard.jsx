import './ArticleCard.css';

const ArticleCard = ({ article: { title, created_at, article_img_url } }) => {
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
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
