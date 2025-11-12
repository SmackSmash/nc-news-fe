import { useEffect, useRef, useState } from 'react';
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import './Select.css';

const Select = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHeight, setSelectHeight] = useState(0);

  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!selectRef.current) return;
    setSelectHeight(selectRef.current.clientHeight);
  }, []);

  useEffect(() => {
    if (!dropdownRef.current) return;

    const handler = e => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', e => handler(e), true);

    return document.removeEventListener('click', e => handler(e), true);
  }, []);

  const handleOptionClick = option => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  return (
    <div ref={dropdownRef} className='selectContainer'>
      <div onClick={() => setIsOpen(!isOpen)} ref={selectRef} className='selectHeader'>
        {value ? value : 'Select...'}
        {isOpen ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
      </div>
      <div style={{ top: `${selectHeight}px` }} className='selectList'>
        {isOpen &&
          options.map(option => {
            return (
              <div key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Select;
