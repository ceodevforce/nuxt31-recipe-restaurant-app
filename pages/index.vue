<script setup>
	//TODO: Use useFetch to pull fake data here..
	// const { useRecipe } from "../store/recipe"

	const recipes = ref([])
	const route = useRoute()
	// const recipeStore = useRecipe()


	const { find } = useStrapi4()

	try {
		const response = await find('recipes')
		if (response) {
			console.log(response)
			recipes.value = response.data
			// recipeStore.recipes = response.data
		}

	} catch (e) {
		console.log(e)
	}

	console.log(recipes.value)
</script>
<template>
	<div>
		<div>
			<h1>Welcome</h1>
			<p>Recipes</p>
		</div>
		
		<div v-for="recipe in recipes" :key="recipe.id">
			<RecipeCard :recipe="recipe" />
		</div>
		
	</div>
</template>