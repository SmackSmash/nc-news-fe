import { useState } from 'react';
import classNames from 'classnames';
import './Image.css';

const Image = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const imgClasses = classNames({
    fadeImage: true,
    loaded
  });

  return <img onLoad={() => setLoaded(true)} src={src} alt={alt} className={imgClasses} loading='lazy' />;
};

export default Image;
