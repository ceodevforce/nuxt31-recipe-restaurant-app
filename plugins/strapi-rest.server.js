import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
	return {
		provide: {
			hello: () => 'world',
			strapiRest: async () => {
				try {
					const { data, error } = await useFetch('http://localhost:1337/api/recipes')

					if (error) throw new Error(error)

					if (data) {
						console.log(data)
					}
				} catch (e) {
					console.log(e);
				}
				
			}
		}
	}
})