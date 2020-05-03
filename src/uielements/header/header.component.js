import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Header(props) {
  const { text, type, className, disabled } = props;
  return (
    <p className={
            classnames(
              'font-bold',
              {
                'text-6xl': type === 'h1',
                'text-5xl': type === 'h2',
                'text-4xl': type === 'h3',
                'text-3xl': type === 'h4',
                'text-2xl': type === 'h5',
                'text-1xl': type === 'h6',
                'text-gray-400': disabled,
                'cursor-not-allowed': disabled,
              },
              className,
            )
        }
    >
      {text}
    </p>
  );
}

Header.propTypes = {
  /**
     * Text to be displayed in header.
     */
  text: PropTypes.string,
  /**
     * Type of header. (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
     */
  type: PropTypes.string,
  /**
     * Custom classname. Any valid css class or a tailwind classname.
     */
  className: PropTypes.string,
  /**
   * Disabled Header.
   */
  disabled: PropTypes.bool,
};

Header.defaultProps = {
  text: '',
  type: 'h1',
  className: '',
  disabled: false,
};

export default Header;
