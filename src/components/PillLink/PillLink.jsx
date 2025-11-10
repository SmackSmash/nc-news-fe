import './PillLink.css';

const PillLink = ({ href, color, margin, children }) => {
  return <a href={href}>{children}</a>;
};

export default PillLink;
