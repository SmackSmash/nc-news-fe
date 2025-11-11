import './Loading.css';

const Loading = ({ children }) => {
  return (
    <div className='loading'>
      <span className='loader'></span>
      {children}
    </div>
  );
};

export default Loading;
