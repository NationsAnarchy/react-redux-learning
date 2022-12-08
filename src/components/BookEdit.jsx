import { useState } from 'react'

function BookEdit({ book, onSubmit }) {

	const [title, setTitle] = useState(book.title)

	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(book.id, title)
	}

	return (
		<div className='pb-4'>
			<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
				<label className='pr-4'>Title</label>
				<input className='w-[120px]' value={title} onChange={handleChange} />
				<button className='p-1 px-4 border-2'>Save</button>
			</form>
		</div>
	)
}

export default BookEdit