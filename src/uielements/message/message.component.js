import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Message(props) {
  const {
    className, messageText, color, style, rounded,
  } = props;
  let messageClass = `bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 relative`;

  if (rounded) {
    messageClass += ' rounded-md';
  }

  return (
    <div
      className={classnames(
        `${messageClass}`,
        `${className}`,
      )}
      style={style}
    >
      <span className="block sm:inline">
        {messageText}
        {' '}
        {props.children}
      </span>
    </div>
  );
}
Message.PropTypes = {
  /**
   * Message text
   */
  messageText: PropTypes.string.isRequired,
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
  /**
   * Message box can have the Child element.
   */
  children: PropTypes.string,
};
Message.defaultProps = {
  className: '',
  style: {},
  color: 'black',
  rounded: false,
  messageText: 'Message Box',
};

export default Message;
