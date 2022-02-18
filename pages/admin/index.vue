<script setup>
	import { useRecipe } from "../../store/recipe"

	const recipeStore = useRecipe()
	const formData = ref({})
	// const recipeTitle = ref('')
	const { create } = useStrapi4()
	

	const submitHandler = async () => {
		try {
			console.log(formData.value)
			const createdRecipe = await create('recipes', formData.value)

			// Get the latest created recipe
			recipeStore.newRecipe = createdRecipe
		} catch (e) {
			console.error(e)
		}
		
	}

	definePageMeta({
		layout: 'admin'
	})
</script>
<template>
	<div>
		 <i-layout-content>
            <i-container fluid>
                <i-row>
                    <i-column>
                        <h1>
                            Recipe Nuxt3
                        </h1>
                        <p>
                            Welcome to the Admin section of this web app.
                        </p>
                    </i-column>
                    <i-column>
                    	<h1>Create</h1>

                    </i-column>
                </i-row>
                
            </i-container>
            <i-row>
                	<i-column>
                		
                		<FormKit type="form" v-model="formData" submit-label="Recipe Entry" @submit="submitHandler">

                			<h1>Recipe Editor</h1>
                			<p> Enter the recipe informartion you will need to make magic happen in the kitchen!</p>
                			<hr/>
                			<FormKit type="text" name="recipeTitle" label="Recipe Title" placeholder="Enter recipe title" help="What is the title of this recipe" validation="required"/>

                			<FormKit type="number" name="rating" label="Rating" placeholder="Enter  rating" help="What is the rating" validation="required"/>
                			<FormKit type="text" name="slug" label="Recipe Slug" placeholder="Enter slug" help="What is the slug" validation="required"/>
                			

                			<FormKit type="number" name="prepTime" label="Recipe Prep Time" placeholder="Enter recipe prep time" help="What is the prep time" validation="required"/>
                			<FormKit type="number" name="cookTime" label="Recipe Cook Time" placeholder="Enter recipe cook time" help="What is the prep time" validation="required"/>
                			<FormKit type="number" name="totalTime" label="Recipe Total Time" placeholder="Enter recipe total time" help="What is the total time" validation="required"/>
                			<FormKit type="textarea" name="description" label="Recipe Description" placeholder="Enter recipe description" help="What is the description" validation="required"/>
                			<FormKit type="textarea" name="directions" label="Recipe Directions" placeholder="Enter recipe directions" help="What is the directions" validation="required"/>
                		</FormKit>

                	</i-column>
                </i-row>
        </i-layout-content>

	</div>
</template>