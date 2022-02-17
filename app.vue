<script setup>
  //TODO: Added Sanity/ Graphql to Nuxt App
  //FIXME: Persist the logged user 
  //FIXME: Inkline fixes/customizations. 
  
  import { useRecipe } from "./store/recipe"

  const store = useRecipe()
  const loggedUser = useStrapiUser()
  store.user = loggedUser

  const recipes = ref([])
  const route = useRoute()

  const { find } = useStrapi4()

  try {
    const response = await find('recipes')
    if (response) {
      console.log(response)
      recipes.value = response.data
      store.recipes = response.data
    }

  } catch (e) {
    console.log(e)
  }


</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
}
</style>

