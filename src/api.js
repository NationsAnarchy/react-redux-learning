import axios from 'axios'

const access_key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID ' + access_key
		},
		params: {
			query: term
		}
	})

	return response.data.results
}

export default searchImages