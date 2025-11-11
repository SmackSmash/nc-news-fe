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
        {data.topics.map(topic => (
          <div key={topic.slug}>{topic.slug}</div>
        ))}
        <Button>+ Add Topic</Button>
      </aside>
    );
  }
};

export default SideBar;
