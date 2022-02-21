<script setup>
	const { find } = useStrapi4()
	const recipeArray = ref([])

	try {
		const recipes = await find('recipes')
		recipeArray.value = recipes.data
		console.log({recipeArray})
	} catch (e) {
		console.error(e)
	}

	const getRatedRecipe = computed(() => {
		console.log('rated recipe')
	})

	const getNewRecipe = computed(() => {
		console.log('new recipe')
	})

</script>
<template>
	<div>
		<h1>Recipes</h1>
		<div v-for="recipe in recipeArray" :key="recipe.id">
			<RecipeCard :recipe="recipe" />
		</div>
	</div>
</template>