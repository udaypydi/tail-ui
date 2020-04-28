import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Container(props) {
    const { className, raised, fluid } = props;

    return (
        <div className={
            classnames(
            {
                "shadow-md": raised,
                "w-full": fluid,
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
}

Container.defaultProps = {
    className: '',
    raised: false,
    fluid: false,
};

export default Container;
