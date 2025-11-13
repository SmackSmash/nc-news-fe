import classNames from 'classnames';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './SortButton.css';

const SortButton = ({ clickHandler, column, sortBy, order, children }) => {
  const btnClasses = classNames({
    sortButton: true,
    hide: column === 'title' || column === 'topic' || column === 'author'
  });

  return (
    <button onClick={() => clickHandler(column)} className={btnClasses}>
      {sortBy === column && (order === 'asc' ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />)}
      {children}
    </button>
  );
};

export default SortButton;
