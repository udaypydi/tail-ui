import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Header(props) {
  const { text, type, className } = props;
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
};

Header.defaultProps = {
  text: '',
  type: 'h1',
  className: '',
};

export default Header;
