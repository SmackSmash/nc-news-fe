import useQuery from '../../hooks/useQuery';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = () => {
  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/users');

  if (isLoading) return <Loading>Loading articles...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    console.log(data.users);
    return (
      <section id='userList'>
        {data.users.map(user => (
          <UserCard user={user} />
        ))}
      </section>
    );
  }
};

export default UserList;
