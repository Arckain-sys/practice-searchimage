import './ImageFind.css'
import ImageShow from './ImageShow'

function ImageFind ({images}) {
    const renderedImages = images.map(image => {
        return <ImageShow key={image.id} image={image} />
    });

    return <div className='image-find'>{renderedImages}</div>
}

export default ImageFind;