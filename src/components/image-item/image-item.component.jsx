import React from 'react';
import PropTypes from 'prop-types';

import ImageItemModal from '../image-item-modal/image-item-modal.component'

import './image-item.styles.scss';

class ImageItem extends React.Component {
    state = {
        modalOpen: false,
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleImageItemKeyDown(e) {
        if (e.key === 'Enter') {
            this.toggleModal();
            e.preventDefault();
        }
    }

    render() {
        const {image: { id, title, thumbnailUrl }} = this.props

        return (
            <React.Fragment>
                <div tabIndex={0} data-testid={`image-${id}-test`} aria-label={title} className="image-item" onClick={() => this.toggleModal()} onKeyDown={this.handleImageItemKeyDown.bind(this)}>
                    <img alt={title} src={thumbnailUrl}/>
                </div>

                 {/* 
                    TODO: Could probably move this to App.js 
                    and leverage react hooks instead of prop drilling 
                 */}
                {this.state.modalOpen ? 
                    <ImageItemModal 
                        {...this.props} 
                        {...this.state} 
                        toggleModalHandler={this.toggleModal.bind(this)} 
                    />
                : ''}
            </React.Fragment>
        );
    }
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired
};

export default ImageItem;