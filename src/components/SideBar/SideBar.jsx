import { useState } from 'react';
import { Link } from 'react-router';
import useQuery from '../../hooks/useQuery';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import './SideBar.css';

const SideBar = () => {
  const [error, isLoading, data] = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/topics');
  const [info, setInfo] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = description => {
    setInfo(description);
    setShowInfo(true);
  };

  const handleMouseLeave = description => {
    setInfo(description);
    setShowInfo(false);
  };

  if (isLoading) return <Loading>Loading topics...</Loading>;

  if (error) return <Error>{error}</Error>;

  if (data) {
    return (
      <aside id='sideBar'>
        <h2>Topics</h2>
        {data.topics.map(topic => (
          <Link
            onMouseEnter={() => handleMouseEnter(topic.description)}
            onMouseLeave={() => handleMouseLeave(topic.description)}
            to={`/topic/${topic.slug}`}
            key={topic.slug}
            className='sideBarLink'>
            <span>{topic.slug}</span>
          </Link>
        ))}
        {showInfo && <p>{info}</p>}
      </aside>
    );
  }
};

export default SideBar;
