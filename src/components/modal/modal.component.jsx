import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import './modal.styles.scss';

let modalRoot = document.getElementById('modal');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);
}

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
                <div data-testid="modal-backdrop-test" className="backdrop" onClick={() => callBack()}></div>
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