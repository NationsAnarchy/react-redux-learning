import React, { useState } from 'react'

function SearchBar({ onSubmit }) {

	const [term, setTerm] = useState('')

	const handleFormSubmit = (event) => {
		event.preventDefault()
		onSubmit(term)
	}

	const handleChange = (event) => {
		setTerm(event.target.value)
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit} className='py-8 flex gap-4'>
				<input type='text' placeholder='search images here' className='p-2 border-2 border-blue-600'
					   onChange={handleChange} value={term} />
				<button className='p-2 border-2 border-red-500'>Search</button>
			</form>
		</div>
	)
}

export default SearchBar