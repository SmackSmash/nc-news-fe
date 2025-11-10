import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <header id='header' className='container'>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
