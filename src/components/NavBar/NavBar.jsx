import { NavLink } from 'react-router';
import './NavBar.css';

const NavBar = ({ topicData }) => {
  return (
    <nav id='nav'>
      <NavLink to='/'>Articles</NavLink>
      {topicData &&
        topicData.topics.map(({ slug }) => (
          <NavLink to={`/topic/${slug}`} className='topic'>
            {slug[0].toUpperCase() + slug.slice(1)}
          </NavLink>
        ))}
      <NavLink to='/users'>Users</NavLink>
    </nav>
  );
};

export default NavBar;
