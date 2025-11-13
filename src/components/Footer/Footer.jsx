import { AiFillGithub } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer' className='container'>
      <a target='_blank' href='https://github.com/SmackSmash/nc-news-fe'>
        <AiFillGithub /> View on GitHub
      </a>
    </footer>
  );
};

export default Footer;
