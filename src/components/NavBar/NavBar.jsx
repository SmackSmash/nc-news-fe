import { NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/articles'>Articles</NavLink>
      <NavLink to='/topics'>Topics</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </nav>
  );
};

export default NavBar;
