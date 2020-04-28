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
    className: PropTypes.string,
    raised: PropTypes.bool,
    fluid: PropTypes.bool,
    rounded: PropTypes.bool,
}

Container.defaultProps = {
    className: '',
    raised: false,
    fluid: false,
    rounded: false,
};

export default Container;
