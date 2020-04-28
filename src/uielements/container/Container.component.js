import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Container(props) {
    const { className, raised } = props;

    return (
        <div className={
            classnames(
            {
                "shadow-md": raised,
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
}

Container.defaultProps = {
    className: '',
    raised: false,
};

export default Container;
