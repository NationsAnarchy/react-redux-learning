import { useState } from 'react'
import BookEdit from './BookEdit.jsx'

function BookShow({ book, onDelete, onUpdate }) {

	const [showEdit, setShowEdit] = useState(false)

	const handleDeleteClick = () => {
		onDelete(book.id)
	}

	const handleEditClick = () => {
		setShowEdit(!showEdit)
	}

	const handleSubmit = (id, newTitle) => {
		setShowEdit(false)
		onUpdate(id, newTitle)
	}

	let content = <h1 className='pb-6 font-bold'>{book.title}</h1>
	if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
	}

	return (
		<div className='flex flex-col max-w-[200px] h-[300px] bg-blue-300 p-4'>
			<img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="images for books" />
			<div>{content}</div>
			{!showEdit && <button className='p-1 border-2 border-gray-100' onClick={handleEditClick}>Edit this book</button>}
			<button className='p-1 border-2 border-gray-100' onClick={handleDeleteClick}>Delete this book</button>
		</div>
	)
}

export default BookShow