import { NavLink } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useState } from 'react';
import './NavBar.css';

const NavBar = ({ topicData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button id='mobileMenu'>
        <GiHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </button>
      <div onClick={() => setIsMenuOpen(false)} id='mobileOverlay' className={isMenuOpen ? 'open' : undefined}></div>
      <nav id='nav' className={isMenuOpen ? 'open' : undefined}>
        <button onClick={() => setIsMenuOpen(false)} id='closeMenu'>
          <RiCloseLargeFill />
        </button>
        <NavLink onClick={() => setIsMenuOpen(false)} to='/'>
          All Articles
        </NavLink>
        {topicData &&
          topicData.topics.map(({ slug }) => (
            <NavLink onClick={() => setIsMenuOpen(false)} to={`/topic/${slug}`} className='topic' key={slug}>
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
