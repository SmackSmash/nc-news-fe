import { Link } from 'react-router';
import './NotFound.css';

const NotFound = () => {
  return (
    <section id='notFound'>
      <h1>404</h1>
      <p>Not found</p>
      <Link to='/'>Back to Home Page</Link>
    </section>
  );
};

export default NotFound;
