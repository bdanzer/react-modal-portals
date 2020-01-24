import React from 'react'

import './button.styles.scss';

const Button = React.forwardRef((otherProps, ref) => {
    return (
        <button ref={ref} {...otherProps}>
            {otherProps.children}
        </button>
    );
});

export default Button;