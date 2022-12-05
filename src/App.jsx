import ProfileCard from './components/ProfileCard.jsx'
import AlexaImage from '../src/assets/profile_images/alexa.png'
import CortanaImage from '../src/assets/profile_images/cortana.png'
import SiriImage from '../src/assets/profile_images/siri.png'

function App() {

	return (
		<div className='px-10'>
			<h1 className='py-8 font-bold text-3xl'>Hello React + Redux + Tailwind + Vite!</h1>
			<div className='flex flex-col md:flex-row gap-10'>
				<ProfileCard title='Alexa' handle='@alexa98' image={AlexaImage}/>
				<ProfileCard title='Siri' handle='@siri97' image={SiriImage}/>
				<ProfileCard title='Cortana' handle='@cortana96' image={CortanaImage}/>
			</div>
		</div>
	)
}

export default App
