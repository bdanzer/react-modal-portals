import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import './modal.styles.scss';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('open');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        const { children, callBack} = this.props;

        return ReactDOM.createPortal(
            <React.Fragment>
                <div className="backdrop" onClick={() => callBack()}></div>
                {children}
            </React.Fragment>, 
            this.el
        );
    }
}

Modal.propTypes = {
    callBack: PropTypes.func.isRequired
};

export default Modal;