import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
    const { options } = props;
    return (
        <select id="tailui-select" className="pt-2">
            {
                options.map(op => <option value={op.value} className="pt-5">{op.name}</option>)
            }
        </select>
    );
}

Select.propTypes = {
    options: PropTypes.array,
};

Select.defaultProps = {
    options: [],
};

export default Select;
