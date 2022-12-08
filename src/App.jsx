import { useState } from 'react'
import BookCreate from './components/BookCreate.jsx'
import BookList from './components/BookList.jsx'

function App() {

	const [books, setBooks] = useState([])

	const deleteBookById = (id) => {
		const updatedBooks = books.filter((book) => {
			return book.id !== id
		})

		setBooks(updatedBooks)
	}

	const updateBookById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, title: newTitle }
			}
			return book
		})
		setBooks(updatedBooks)
	}

	const handleCreateBook = (title) => {
		const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }]
		setBooks(updatedBooks)
	}

	return (
		<div className='p-6'>
			<h1 className='font-bold text-3xl'>Hello React + Redux + Tailwind + Vite!</h1>
			<BookCreate onCreate={handleCreateBook} />
			<BookList books={books} onDelete={deleteBookById} onUpdate={updateBookById} />
		</div>
	)
}

export default App
