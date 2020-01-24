import React from 'react';
import PropTypes from 'prop-types';

import ImageItem from '../image-item/image-item.component';

import './image-collection.styles.scss';

function ImageCollection({ images }) {
    return (
        <div className="image-collection">
            {images.map(((image) => (
                <ImageItem 
                    key={image.id}  
                    image={image}
                />
            )))}
        </div>
    )
}

ImageCollection.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImageCollection