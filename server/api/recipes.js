const getData = async() => {
  try {
    const recipes = await fetch('http://localhost:1337/api/recipes').then(response => response.json()).then(recipes => console.log(recipes));
    console.log('working')
    console.log(recipes)
  } catch (err) {
    console.error(err)
}
}

export default async (req, res) => {
  const data = getData()
  

  return {
    someData: true,
    recipeData: data, 
  }
}
