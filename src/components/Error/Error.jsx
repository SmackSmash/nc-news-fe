import { Link } from 'react-router';
import './Error.css';

const Error = ({ children }) => {
  return (
    <div className='error'>
      {children}
      <Link to='/'>Back to Home Page</Link>
    </div>
  );
};

export default Error;
