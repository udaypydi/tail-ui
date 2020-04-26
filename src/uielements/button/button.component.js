import React from 'react';
import PropTypes from 'prop-types';

/**
 * Captures user click actions.
 */

function Button(props) {
  const { buttonText, primary, onClick } = props;
  let btnClass = '';

  if (primary) {
    btnClass = 'bg-transparent hover:bg-blue-500 text-indigo-100 font-semibold hover:text-white py-2 px-4 border border-indigo-100 hover:border-transparent rounded';
  }
  return (
    <button
      type="button"
      className={`${btnClass}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  /**
   * Button text
   */
  buttonText: PropTypes.string,
  /**
   * renders a button based on the primary theme
   */
  primary: PropTypes.bool,
  /**
   * a callback to handle on click event
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  onClick: () => null,
  buttonText: 'Button',
};


export default Button;
