import classNames from 'classnames';
import './PillLink.css';

const PillLink = ({ href, color, margin, children }) => {
  const btnClass = classNames({
    pill: true,
    [color]: color,
    margin: margin
  });

  return (
    <a href={href} className={btnClass}>
      {children}
    </a>
  );
};

export default PillLink;
