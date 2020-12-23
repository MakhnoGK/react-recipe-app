import useLocalStorage from './useLocalStorage'

export default function useSavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useLocalStorage(
    'recipegram-recipes',
    []
  )

  const isSaved = (id) => {
    return savedRecipes.some((recipe) => recipe.idMeal === id)
  }

  const toggleRecipeInStorage = (recipe) => {
    if (!isSaved(recipe.idMeal)) {
      setSavedRecipes([recipe, ...savedRecipes])
    } else {
      setSavedRecipes([
        ...savedRecipes.filter((search) => search.idMeal !== recipe.idMeal),
      ])
    }
  }

  return [savedRecipes, toggleRecipeInStorage, isSaved]
}
