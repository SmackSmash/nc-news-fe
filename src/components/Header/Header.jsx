import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = ({ topicData }) => {
  return (
    <header id='header'>
      <Logo />
      <NavBar topicData={topicData} />
    </header>
  );
};

export default Header;
