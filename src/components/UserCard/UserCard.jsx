import Image from '../Image/Image';
import './UserCard.css';

const UserCard = ({ user: { name, username, avatar_url } }) => {
  return (
    <article className='userCard'>
      <div className='userImage'>
        <Image src={avatar_url} alt={`${name}'s avatar`} />
      </div>
      <div className='userDetails'>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </div>
    </article>
  );
};

export default UserCard;
