import React from 'react'
import ImageShow from './ImageShow.jsx'

function ImageList({ images }) {

	const renderedImages = images.map((image) => {
		return <ImageShow image={image} key={image.id} />
	})

	return (
		<div>
			<h1 className='font-bold'>Image List</h1>
			<h2>Number of images: <span className='italic font-bold'>{images.length}</span></h2>
			<div className='columns-4 pt-6'>{renderedImages}</div>
		</div>
	)
}

export default ImageList