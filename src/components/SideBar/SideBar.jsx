import { Link } from 'react-router';
import useQuery from '../../hooks/useQuery';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
import './SideBar.css';

const SideBar = () => {
  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/topics');

  if (isLoading) return <Loading>Loading topics...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return (
      <aside id='sideBar'>
        <h2>Topics</h2>
        {data.topics.map(topic => (
          <Link to={`/topics/${topic.slug}`} key={topic.slug} className='sideBarLink'>
            <span>{topic.slug}</span>
            <p>{topic.description}</p>
          </Link>
        ))}
      </aside>
    );
  }
};

export default SideBar;
