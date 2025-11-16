import useQuery from '../../hooks/useQuery';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = () => {
  const { error, isLoading, data } = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/users');

  if (isLoading)
    return (
      <section id='userList'>
        <Loading>Loading users...</Loading>
      </section>
    );

  if (error)
    return (
      <section id='userList'>
        <Error>{error.message}</Error>
      </section>
    );

  if (data) {
    return (
      <section id='userList'>
        <h1>User List</h1>
        <section id='userGrid'>
          {data.users.map(user => (
            <UserCard user={user} key={user.username} />
          ))}
        </section>
      </section>
    );
  }
};

export default UserList;
