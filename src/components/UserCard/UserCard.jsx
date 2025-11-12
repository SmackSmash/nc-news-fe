import './UserCard.css';

const UserCard = ({ user: { name, username, avatar_url } }) => {
  return (
    <article>
      <h2>{name}</h2>
      <h2>{username}</h2>
      <img src={avatar_url} alt={`${name}'s avatar`} />
    </article>
  );
};

export default UserCard;
