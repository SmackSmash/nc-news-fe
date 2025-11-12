import { NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav id='nav'>
      <NavLink to='/'>Articles</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </nav>
  );
};

export default NavBar;
