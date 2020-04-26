import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const defaultInput = 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal';
  const { placeholder } = props;

  return (
    <input className={`${defaultInput}`} placeholder={placeholder} />

  );
}

Input.propTypes = {
  /**
     * Placeholder text
     */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
