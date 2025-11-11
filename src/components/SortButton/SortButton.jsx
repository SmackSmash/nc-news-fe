import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './SortButton.css';

const SortButton = ({ clickHandler, column, sortBy, order, children }) => {
  return (
    <button onClick={() => clickHandler(column)} className='sortButton'>
      {sortBy === column && (order === 'asc' ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />)}
      {children}
    </button>
  );
};

export default SortButton;
