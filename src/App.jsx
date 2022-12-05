import SearchBar from './components/SearchBar.jsx'
import searchImages from './api.js'
import ImageList from './components/ImageList.jsx'
import { useState } from 'react'

function App() {

	const [images, setImages] = useState([])

	const handleSubmit = async (term) => {
		const result = await searchImages(term)
		setImages(result)
	}

	return (
		<div className='p-6'>
			<h1 className='font-bold text-3xl'>Hello React + Redux + Tailwind + Vite!</h1>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	)
}

export default App
