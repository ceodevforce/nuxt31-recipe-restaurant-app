<script setup>
	const route = useRoute()
	const { find } = useStrapi4()

	try {
		const response = await find('recipe')
		console.log(response)
	} catch (e) {
		console.log(e)
	}
</script>
<template>
	<div>
		<h1>Welcome</h1>
		<p>Recipes</p>
	</div>
</template>