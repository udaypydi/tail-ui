import React from 'react';
import PropTypes from 'prop-types';
import 'src/assets/css/main.css';
/**
 * Captures user click actions.
 */

function Button(props) {
  const {
    buttonText, primary, onClick, className, style, bgColor, color, rounded,
  } = props;
  let btnClass = '';

  if (primary) {
    btnClass = `
    bg-${bgColor}-700 hover:bg-${bgColor}-500 text-${color}-700 
    font-semibold hover:text-${color}-700 py-2 px-4 border border-black-700`;
  }

  if (rounded) {
    btnClass += ' rounded-md';
  }

  return (
    <button
      type="button"
      className={`${btnClass} ${className}`}
      onClick={onClick}
      style={style}
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
   * Renders a button based on the primary theme
   */
  primary: PropTypes.bool,
  /**
   * A callback to handle on click event
   */
  onClick: PropTypes.func,
  /**
   * Custom classnames, Any valid className or a tailwind class (ex: `text-blue-700`).
   */
  className: PropTypes.string,
  /**
   * Custom style object
   */
  style: PropTypes.shape({}),
  /**
   * Button Background Color. Any valid color (`red`, `green`. `blue` etc.)
   */
  bgColor: PropTypes.string,
  /**
   * Button Text Color
   */
  color: PropTypes.string,
  /**
   * Adds default border radius to button.
   * The border radius can be modified through custom styles
   * or through tailwind classname (`rounded`, `rounded-sm`, `rounded-md` etc)
   */
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  onClick: () => null,
  buttonText: 'Button',
  className: '',
  style: {},
  bgColor: 'transparent',
  color: 'black',
  rounded: false,
};


export default Button;
