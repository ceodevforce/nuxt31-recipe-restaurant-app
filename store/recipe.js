import { defineStore } from 'pinia'


export const useRecipe = defineStore('recipe', {
  state: () => {
    return {
      user: {},
      recipes: [],
      recipe: {}, 
      newRecipe: {}
    }
  }
})
