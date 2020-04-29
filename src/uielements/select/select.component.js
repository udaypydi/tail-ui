import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Select(props) {
    const { options, containerClass, optionClass } = props;
    return (
        <select 
            id="tailui-select" 
            className={classnames(
                "pt-2",
                containerClass,
            )}
        >
            {
                options.map(op => (
                    <option 
                        value={op.value} 
                        className={classnames("pt-5", optionClass)}
                    >{op.name}</option>
                ))
            }
        </select>
    );
}

Select.propTypes = {
    /**
     * Options to render in select.
     */
    options: PropTypes.array,

    /**
     * Custom classnames to select container, Any valid className or a tailwind class (ex: `text-blue-700`).
     */
    containerClass: PropTypes.string,

    /**
     * Custom classnames to option, Any valid className or a tailwind class (ex: `text-blue-700`).
     */
    optionClass: PropTypes.string,
};

Select.defaultProps = {
    options: [],
    className: '',
    optionClass: '',
};

export default Select;
