import React from 'react';

import './spinner.styles.scss';

function Spinner() {
    return (
        <div data-testid="spinner-test" className="loader">Loading...</div>
    );
}

export default Spinner;