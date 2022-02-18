import { useNuxtApp } from '#app'

export default async (req, res) => {
  const nuxtApp = useNuxtApp()

  console.log(nuxtApp)
  return {
    someData: true
  }
}
