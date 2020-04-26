import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  const { className, messageText, color, style, rounded, primary } = props;
  let messageClass;
  if (primary) {
    messageClass = `bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 relative`;
  }

  if (rounded) {
    messageClass += ' rounded-md';
  }

  return (
    <div className={`${messageClass} ${className}`} style={style}>
      <span className="block sm:inline"> {messageText}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}
Message.PropTypes = {
  /**
   * Renders a button based on the primary theme
   */
  primary: PropTypes.bool,
  /**
   * Message text
   */
  messageText: PropTypes.string,
  /**
   * Custom classnames, Any valid className or a tailwind class (ex: `text-blue-700`).
   */
  className: PropTypes.string,
  /**
   * Custom style object
   */
  style: PropTypes.shape({}),
  /**
   * Message Text Color
   */
  color: PropTypes.string,
  /**
   * Adds default border radius to button.
   * The border radius can be modified through custom styles
   * or through tailwind classname (`rounded`, `rounded-sm`, `rounded-md` etc)
   */
  rounded: PropTypes.bool,
};
Message.defaultProps = {
  className: '',
  style: {},
  color: 'black',
  rounded: false,
  messageText: 'Message Box',
  primary: true,
};

export default Message;
