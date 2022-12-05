import { useState } from 'react'
import AnimalShow from './components/AnimalShow.jsx'

function getRandomAnimal() {
	const animals = ['dog', 'cat', 'chicken', 'cow', 'horse', 'bird']

	return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

	const [animals, setAnimals] = useState([])

	const handleClick = () => {
		setAnimals([...animals, getRandomAnimal()])
	}

	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShow type={animal.toUpperCase()} key={index}/>
	})

	return (
		<div className='p-6'>
			<h1 className='font-bold text-3xl'>Hello React + Redux + Tailwind + Vite!</h1>
			<div className='pt-6'>
				<button onClick={handleClick} className='p-2 bg-blue-400 border-2 border-black'>Click here</button>
				<p>{renderedAnimals}</p>
			</div>
		</div>
	)
}

export default App
