export default function mapIngredients(recipe) {
  const ingredients = []

  for (let i = 1; i <= 20; i++) {
    if (
      recipe[`strIngredient${i}`] === null ||
      recipe[`strIngredient${i}`] === undefined ||
      recipe[`strIngredient${i}`] === '-' ||
      recipe[`strIngredient${i}`] === ''
    )
      continue

    ingredients.push({
      name: recipe[`strIngredient${i}`],
      amount: recipe[`strMeasure${i}`],
    })
  }

  return ingredients
}
