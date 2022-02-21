<script setup>
    const router = useRouter()
    const route = useRoute()

    const props = defineProps({
        recipe: Object
    }) 
    const { id } = props.recipe
    const { imageMain, title, directions, description } = props.recipe.attributes
    
    const toggleRecipe = (id) => {
        console.log("Click")
        router.push(`/recipes/${id}`)
    }

</script>
<template>
    <div>
        <i-card>
            <template #image >
                <img id="fixed-card" :src="imageMain" :alt="title"/>
            </template>
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-subtitle">{{ description }}</p>
        <!-- <p>{{ directions }}</p> -->
        <i-button @click="toggleRecipe(id)">Check Me Out!</i-button>
    </i-card>
    </div>
</template>
<style>
    #fixed-card {
    height: 250px;
}
</style>