import BookShow from './BookShow.jsx'

function BookList({ books, onDelete, onUpdate }) {

	const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate}/>
	})

	return (
		<div>
			<h1 className='pb-4'>Book List</h1>
			<div className='flex gap-6'>{renderedBooks}</div>
		</div>
	)
}

export default BookList