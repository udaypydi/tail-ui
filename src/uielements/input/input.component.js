import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Input(props) {
  const {
    placeholder, className, rounded, disabled, error, fluid, style, type, onChange,
  } = props;

  const defaultInput = 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal';

  return (
    <input
      className={classnames(
        `${defaultInput}`,
        `${className}`,
        {
          'rounded-md': rounded,
          'bg-gray-200': disabled,
          'bg-red-200': error,
          'border-red-400': error,
          'text-red-400': error,
          'placeholder-red-300': error,
          'w-full': fluid,
        },
      )}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      onChange={onChange}
    />

  );
}

Input.propTypes = {
  /**
     * Placeholder text
     */
  placeholder: PropTypes.string,
  /**
   * Custom classnames, Any valid className or a tailwind class (ex: `text-blue-700`).
   */
  className: PropTypes.string,
  /**
   * Custom style object.
   */
  style: PropTypes.shape({}),
  /**
   * Add border radius to the input.
   */
  rounded: PropTypes.bool,
  /**
     * Disable the input field
     */
  disabled: PropTypes.bool,
  /**
     * An Input field can show the data contains errors.

     */
  error: PropTypes.bool,
  /**
   * Take on the size of its parent.
   */
  fluid: PropTypes.bool,
  /**
   * Type of input. (`email`, `phone`, `number`, `string` etc).
   * Accepts the props of standard HTML input.
   */
  type: PropTypes.bool,
    /**
   * Capture on change of input
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  rounded: false,
  disabled: false,
  error: false,
  fluid: false,
  style: {},
  type: 'string',
  onChange: () => false,
};

export default Input;
