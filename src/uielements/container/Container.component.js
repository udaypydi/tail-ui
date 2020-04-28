import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Container(props) {
    const { 
        className, 
        raised, 
        fluid,
        rounded,
    } = props;

    return (
        <div className={
            classnames(
            {
                "shadow-md": raised,
                "w-full": fluid,
                "rounded": rounded,
            },
            className,
            )
        }>
        </div>
    )
}

Container.propTypes = {
     /**
     * Custom classes to container. A valid css class name or a tailwind class name.
     */
    className: PropTypes.string,
    /**
     * Adds a shadow to the container. The shadow can be changed by passing tailwind classNames (`shadow`, `shadow-md`, `shadow-lg`)
     */
    raised: PropTypes.bool,
    /**
     * A fluid container takes full width of the parent.
     */
    fluid: PropTypes.bool,
    /**
     * Adds a default `border-radius` to the container. The radius can be changed by passing tailwind classNames (`radius`, `radius-md`, `radius-lg`)
     */
    rounded: PropTypes.bool,
}

Container.defaultProps = {
    className: '',
    raised: false,
    fluid: false,
    rounded: false,
};

export default Container;
