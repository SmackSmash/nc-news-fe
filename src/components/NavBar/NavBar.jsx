import { NavLink } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import './NavBar.css';
import { useState } from 'react';

const NavBar = ({ topicData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button id='mobileMenu'>
        <GiHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </button>
      <div onClick={() => setIsMenuOpen(false)} id='mobileOverlay' className={isMenuOpen && 'open'}></div>
      <nav id='nav' className={isMenuOpen && 'open'}>
        <NavLink onClick={() => setIsMenuOpen(false)} to='/'>
          Articles
        </NavLink>
        {topicData &&
          topicData.topics.map(({ slug }) => (
            <NavLink onClick={() => setIsMenuOpen(false)} to={`/topic/${slug}`} className='topic'>
              {slug[0].toUpperCase() + slug.slice(1)}
            </NavLink>
          ))}
        <NavLink onClick={() => setIsMenuOpen(false)} to='/users'>
          Users
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
