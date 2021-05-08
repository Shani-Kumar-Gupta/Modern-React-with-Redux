import React from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard';

const ImagesList = (props) => {
    const { images } = props;
    const image = images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return (
        <div className="image-list">
            {image}
        </div>
    )
}

export default ImagesList;
