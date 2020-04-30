import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import dropdownicon from 'assets/icons/drop-down-arrow.svg';

function Option(props) {
    const { options, onClick, optionClass } = props;
    return (
        <div className={classnames("border absolute bg-white w-full", optionClass)}>
            {options.map(option => (
                <p 
                    onClick={() => onClick(option)}
                    className="p-2 border-b cursor-pointer"
                >
                    {option.name}
                </p>
            ))}
        </div>
    );
}

function Select(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOptions] = useState({});
  const { options, containerClass, optionClass } = props;

  function handleClick(option) {
      setSelectedOptions(option);
      setShowDropdown(false);
  }

  return (
      <div id="tailui-dropdown" className="inline-block relative">
        <div 
            onClick={() => setShowDropdown(!showDropdown)}
            className={classnames(
                'border-gray-300 border p-2 flex items-center cursor-pointer rounded-md font-mono',
                {
                    'text-gray-400': !selectedOption.name,
                },
                containerClass,
        )}>
            {selectedOption.name || 'Select Event'}
            <img src={dropdownicon} className="h-4 ml-1" />
        </div>
        {
            showDropdown && (
                ReactDOM.createPortal(<Option options={options} optionClass={optionClass} onClick={handleClick} />, document.getElementById('tailui-dropdown'))
            )
        }
        
      </div>
  );
}

Select.propTypes = {
  /**
     * Options to render in select.
     */
  options: PropTypes.shape([]),

  /**
     * Custom classnames to select container,
     * Any valid className or a tailwind class (ex: `text-blue-700`).
     */
  containerClass: PropTypes.string,

  /**
     * Custom classnames to option,
     * Any valid className or a tailwind class (ex: `text-blue-700`).
     */
  optionClass: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  containerClass: '',
  optionClass: '',
};

export default Select;
