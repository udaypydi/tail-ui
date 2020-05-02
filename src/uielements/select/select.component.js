import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FormInput from 'uielements/input/input.component';
import dropdownicon from 'assets/icons/drop-down-arrow.svg';
import './select.scss';

function Option(props) {
  const {
    options, onClick, optionClass, searchable,
  } = props;
  const [filteredOptions, setFilteredOptions] = useState(options);
  const inputEl = React.createRef();

  useEffect(() => {
    if (searchable) {
        inputEl.current.focus();
    }  
    
  }, []);
  function handleOptionFilter(value) {
    const opts = options.filter(
      (option) => option.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredOptions(opts);
  }

  return (
    <div className={classnames('border absolute bg-white w-full z-50', optionClass)}>
      {
            searchable && (
            <FormInput
              className="rounded-md"
              placeholder="Search..."
              onChange={(e) => handleOptionFilter(e.target.value)}
              ref={inputEl}
            />
            )
        }
      {filteredOptions.map((option) => (
        <p
          onClick={() => onClick(option)}
          className="p-2 border-b cursor-pointer"
          role="presentation"
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
  const {
    options, containerClass, optionClass, onChange, searchable, dropdownWrapperClass,
  } = props;

  function handleClick(option) {
    setSelectedOptions(option);
    setShowDropdown(false);
    onChange(option);
  }

  return (
    <div id="tailui-dropdown" className={classnames('inline-block relative SelectContainer', dropdownWrapperClass)}>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        role="presentation"
        className={classnames(
          'border-gray-300 border p-2 flex items-center cursor-pointer rounded-md font-mono justify-between',
          {
            'text-gray-400': !selectedOption.name,
          },
          containerClass,
        )}
      >
        {selectedOption.name || 'Select Event'}
        <img src={dropdownicon} className="h-4 ml-1" alt="Select Dropdown" />
      </div>
      {
            showDropdown && (
            <Option
              options={options}
              optionClass={optionClass}
              onClick={handleClick}
              searchable={searchable}
            />
            )
        }

    </div>
  );
}

Option.propTypes = {
  options: PropTypes.shape([]).isRequired,
  onClick: PropTypes.func.isRequired,
  optionClass: PropTypes.string.isRequired,
  searchable: PropTypes.bool.isRequired,
};

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
  /**
   * onChange handler for select. Returns the selected option
   */
  onChange: PropTypes.func,
  /**
   * Make the dropdown searchable
   */
  searchable: PropTypes.bool,

  /**
   * Customize the dropdown wrapper, like (`height`, `width`)
   */
  dropdownWrapperClass: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  containerClass: '',
  optionClass: '',
  onChange: () => null,
  searchable: false,
  dropdownWrapperClass: '',
};

export default Select;
