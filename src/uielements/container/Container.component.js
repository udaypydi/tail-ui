import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Container(props) {
    const { className } = props;

    return (
        <div className={
            classnames(className)
        }>
        </div>
    )
}

Container.propTypes = {
    className: PropTypes.string,
}

Container.defaultProps = {
    className: '',
};

export default Container;
