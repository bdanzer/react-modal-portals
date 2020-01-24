import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/modal.component';
import Button from '../button/button.component';

import './image-item-modal.styles.scss';

class ImageItemModal extends React.Component {
    state = {
        editingMode: false,
        description: 'Click Here To Add A Description'
    }

    constructor(props) {
        super(props)

        this.persistence = {
            IMAGE_DESCRIPTION_KEY: `image-${props.image.id}-description` 
        };

        this.closeButton = React.createRef();
        this.textarea = React.createRef();
        this.description = React.createRef();
        this.saveButton = React.createRef();
    }

    componentDidMount() {
        let description = window.localStorage.getItem(this.persistence.IMAGE_DESCRIPTION_KEY);

        if (description) {
            this.setState({description});
        }

        if (this.props.modalOpen) {
            setTimeout(() => this.closeButton.current.focus());
        }    
    }

    toggleEditingMode() {
        this.setState({editingMode: !this.state.editingMode});
    }

    /**
     * TODO: Could look into some user experience issues possibly, since
     * it might not be ideal for things to save on modal close or as you 
     * type
     */
    setEdits(e) {
        this.setState({description: e.target.value});

        /**
         * TODO: Maybe look into how to data model this better 
         * inside of a JSON object rather than individual keys
         */
        window.localStorage.setItem(this.persistence.IMAGE_DESCRIPTION_KEY, e.target.value);
    }


    /**
     * TODO: Could clean up/compbine the keyDown functions
     */
    handleCloseButtonKeyDown(e) {
        if (e.shiftKey && e.key === 'Tab' && this.state.editingMode) {
            this.saveButton.current.focus();
            return e.preventDefault();
        }

        if (e.shiftKey && e.key === 'Tab' && !this.state.editingMode) {
            this.description.current.focus();
            return e.preventDefault();
        }

        if (e.key === 'Enter') {
            this.props.toggleModalHandler();
            return e.preventDefault();
        }
    }

    /**
     * TODO: Could clean up/compbine the keyDown functions
     */
    handleKeyDown(e, target = 'description') {
        if (e.key === 'Enter' && target === 'textarea') {
            this.toggleEditingMode();
            setTimeout(() => this.textarea.current.focus())
            return e.preventDefault();
        }

        if (e.key === 'Enter' && target === 'button') {
            this.toggleEditingMode();
            setTimeout(() => this.description.current.focus())
            return e.preventDefault();
        }

        if (e.key === 'Enter' && target === 'description') {
            this.toggleEditingMode();
            setTimeout(() => this.description.current.focus())
            return e.preventDefault();
        }

        if (e.key === 'Tab' && !e.shiftKey && target !== 'description') {
            this.closeButton.current.focus()
            return e.preventDefault();
        }
    }

    render() {
        const {image: { title, url }, toggleModalHandler} = this.props;

        return (
            <Modal callBack={() => toggleModalHandler()}>
                <Button 
                    ref={this.closeButton} 
                    tabIndex={0} 
                    className="close-modal" 
                    onKeyDown={this.handleCloseButtonKeyDown.bind(this)} 
                    onClick={() => toggleModalHandler()}
                    aria-label="Close Modal">
                    X
                </Button>
                <div className="image-item-modal-wrap">
                    <div className="image-wrapper">
                        <img alt={title} src={url}></img>
                    </div>
                    <div className="content-wrapper">
                        <h2>{title}</h2>
                        {this.state.editingMode ? [
                            <textarea
                                key={1}
                                tabIndex={0}
                                aria-label="Editing Description"
                                ref={this.textarea}
                                onChange={this.setEdits.bind(this)} 
                                value={this.state.description}
                                onKeyDown={this.handleKeyDown.bind(this)}
                                maxlength="140"
                            />,
                            <Button 
                                key={2} 
                                ref={this.saveButton}
                                onKeyDown={(e) => this.handleKeyDown(e, 'button')} 
                                onClick={this.toggleEditingMode.bind(this)}>
                                Save Changes
                            </Button>
                        ] : 
                            <p 
                                ref={this.description} 
                                aria-label={`Hit Enter to start editing text: ${this.state.description}`}
                                tabIndex={0} 
                                onClick={this.toggleEditingMode.bind(this)} 
                                onKeyDown={(e) => this.handleKeyDown(e, 'textarea')}>
                                {this.state.description}
                            </p>
                        }
                    </div>
                </div>
            </Modal>
        )
    }
}

ImageItemModal.propTypes = {
    image: PropTypes.object.isRequired,
    toggleModalHandler: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired
};

export default ImageItemModal;