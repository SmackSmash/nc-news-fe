import './ArticleCard.css';

const ArticleCard = ({ article: { title, article_img_url } }) => {
  console.log(title, article_img_url);
  return (
    <article className='articleCard'>
      <div className='articleCardVoter'></div>
      <div className='articleCardContent'>
        <div className='articleImgContainer'>
          <img src={article_img_url} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>
    </article>
  );
};

export default ArticleCard;
