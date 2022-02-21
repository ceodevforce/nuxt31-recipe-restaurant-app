<script setup>
  //TODO: Added Sanity/ Graphql to Nuxt App
  //FIXME: Persist the logged user 
  //FIXME: Inkline fixes/customizations. 
  
  import { useRecipe } from "./store/recipe"

  const store = useRecipe()
  const loggedUser = useStrapiUser()

  console.log(loggedUser)

  const recipes = ref([])
  const route = useRoute()

  const { find } = useStrapi4()

  try {
    const response = await find('recipes')
    if (response) {
      recipes.value = response.data
      store.recipes = response.data
    }

  } catch (e) {
    console.log(e)
  }

  // const { fetchUser } = useStrapiAuth()

  // const userStrap = await fetchUser()

  // console.log(userStrap)

  // const getRecipeCookie = () => {
  //   const cookie = useCookie('recipe_cookies', {
  //   maxAge: 30 * 60 * 24 * 1000,
  // })
  //     console.log(cookie)

  // } 
  // console.log(loggedUser)
  
  // if (loggedUser) {
  //   cookie.userMain = loggedUser
  // }



// onMounted(() => {
//   getRecipeCookie()
// })

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

