import React from 'react'

const ImagesList = (props) => {
    const { images } = props;
    const image = images.map(({id, urls, description}) => {
        return <img key={id} src={urls.regular} alt={description} />
    })

    return (
        <div>
            {image}
        </div>
    )
}

export default ImagesList;
