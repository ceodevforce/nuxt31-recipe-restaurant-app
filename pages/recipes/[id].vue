<script setup>
	// import { useFindOneRecipe } from "../../composables/useFindOneRecipe"
	// const route = useRoute()

	// const recipe = ref(null)

	// const { findOne } = useStrapi4()

	// try {
	// 	const response = await findOne('recipes', route.params.id)
	// 	console.log(response)
	// 	if (!response) throw new Error

	// 	recipe.value = response.data.attributes

	// } catch (e) {
	// 	console.log(e)
	// }
	
	const { recipe, loading, getData } = useFindOneRecipe()
	onMounted(() => {
		getData()
	})
	console.log(recipe)
	
</script>
<template>
	<div>
		<h1>{{ recipe.title }}</h1>
	</div>
</template>