import { Link } from 'react-router';
import classNames from 'classnames';
import './PillLink.css';

const PillLink = ({ to, color, margin, children }) => {
  const btnClass = classNames({
    pill: true,
    [color]: color,
    margin: margin
  });

  return (
    <Link to={to} className={btnClass}>
      {children}
    </Link>
  );
};

export default PillLink;
