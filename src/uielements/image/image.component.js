import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Image(props) {
  const {
    src, altText, rounded, className, href, onClick, elevated,
  } = props;

  function handleImageClick() {
    if (href) {
      window.open(href, '_blank');
      return false;
    }
    return onClick;
  }
  return (
    <img
      className={classnames(
        {
          'rounded-full': rounded,
          shadow: elevated,
        },
        className,
      )}
      src={src}
      alt={altText}
      onClick={handleImageClick}
      role="presentation"
    />
  );
}

Image.propTypes = {
  /**
     * Image source. Render a image url or a static resource
     */
  src: PropTypes.string.isRequired,
  /**
     * Add a alternative text for the image if the image fails to load.
     */
  altText: PropTypes.string,
  /**
     * Make a image rounded.
     */
  rounded: PropTypes.bool,
  /**
     * Custom classes to image. A valid css class name or a tailwind class name.
     */
  className: PropTypes.string,
  /**
     * Use image as a hyper link.
     */
  href: PropTypes.string,
  /**
     * Handle Image Click. If href is added, the `onClick` will be overridden.
     */
  onClick: PropTypes.func,
  /**
     * Elevated image. Default elevation is tailwind's shadow.
     * Any tailwind shadow class in the classname will override the behaviour.
     */
  elevated: PropTypes.bool,
};

Image.defaultProps = {
  altText: '',
  rounded: false,
  className: '',
  href: '',
  onClick: () => null,
  elevated: false,
};


export default Image;
