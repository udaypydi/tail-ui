import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import dropdownicon from 'assets/icons/drop-down-arrow.svg';

function Select(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOptions] = useState({});
  const { options, containerClass, optionClass } = props;
  return (
      <div className="inline-block">
        {
            !showDropdown && (
                <div className={classnames(
                    'border-gray-300 border p-2 flex items-center cursor-pointer rounded-md font-mono'
                )}>
                    {selectedOption.text || 'Select Event'}
                    <img src={dropdownicon} className="h-4 ml-1" />
                </div>
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
