import Card from './Card'

const SavedRecipes = ({ recipes }) => {
  return (
    <div className="saved-recipes">
      {recipes ? (
        recipes.map((recipe, index) => <Card key={index} recipe={recipe} />)
      ) : (
        <p>You don't save any recipes yet...</p>
      )}
    </div>
  )
}

export default SavedRecipes
