<script setup>
	//TODO: Use useFetch to pull fake data here..
	// const { useRecipe } from "../store/recipe"

	const recipes = ref([])
	const route = useRoute()
	// const recipeStore = useRecipe()

	//TODO: Pull all data from Pinia
	const { find } = useStrapi4()

	try {
		const response = await find('recipes')
		if (response) {
			// console.log(response)
			recipes.value = response.data
			// recipeStore.recipes = response.data
		}

	} catch (e) {
		console.log(e)
	}

	// console.log(recipes.value)
</script>
<template>
	<div>
	<i-header id="cover-header" cover class="_text-align:center _color:white">
    <h1>Nuxt3 Recipe Resta</h1>
    <p>This is a cover background header paragraph lorem ipsum dolor sit amet.</p>
    <i-button color="primary">Button</i-button>
</i-header>
		<i-container>
			<h1>Welcome</h1>
			<p>Recipes on Demand</p>
		</i-container>
		<i-layout>
		<i-layout-content>
			<i-container>
				<i-row>
					<i-column v-for="recipe in recipes" :key="recipe.id">
			<RecipeCard :recipe="recipe" />
		</i-column>
				</i-row>
			</i-container>
		</i-layout-content>
		</i-layout>		
		
	</div>
</template>
<style scoped>
	#cover-header {
  background-image: url("https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
};

</style>