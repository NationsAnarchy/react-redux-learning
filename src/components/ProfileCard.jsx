import React from 'react'

function ProfileCard({ title, handle, image }) {
	return (
		<div className='rounded-lg shadow-lg bg-white max-w-sm'>
			<a href='/'>
				<img className='rounded-t-lg' src={image} alt='profile picture' />
			</a>
			<div className='p-6'>
				<h5 className='text-gray-900 text-xl font-medium mb-2'>{title}</h5>
				<p className='text-gray-700 text-base mb-4'>
					{handle}
				</p>
			</div>
		</div>
	)
}

export default ProfileCard