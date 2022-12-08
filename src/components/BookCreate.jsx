import { useState } from 'react'

function BookCreate({ onCreate }) {

	const [title, setTitle] = useState('')

	const handleChange = (event) => {
		setTitle(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		onCreate(title)
		setTitle('')
	}

	return (
		<div className='pt-12'>
			<h1 className='font-bold text-2xl pb-4'>Create a new book here</h1>
			<form onSubmit={handleSubmit}>
				<label className='pr-4'>The title of the book:</label>
				<input className='border-2 border-black py-1 pl-2 mr-4' onChange={handleChange} value={title} placeholder='Name of the book here' />
				<button className='border-2 border-black p-1'>Create!</button>
			</form>
		</div>
	)
}

export default BookCreate