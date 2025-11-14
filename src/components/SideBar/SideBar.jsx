import { useState } from 'react';
import { Link } from 'react-router';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import './SideBar.css';

const SideBar = ({ error, isLoading, data }) => {
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

  if (isLoading)
    return (
      <aside id='sideBar'>
        <Loading>Loading topics...</Loading>
      </aside>
    );

  if (error)
    return (
      <aside id='sideBar'>
        <Error>{error.message}</Error>
      </aside>
    );

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
