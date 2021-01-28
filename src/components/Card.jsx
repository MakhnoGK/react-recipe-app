import { useContext } from 'react'
import savedContext from '../context/savedContext'
import SaveButton from './SaveButton'

function Card({ recipe, variant = 'vertical' }) {
  const recipes = useContext(savedContext)

  return (
    <div
      className={`card ${variant === 'horizontal' ? 'card--horizontal' : ''}`}
      onClick={(e) => {
        if (e.target.closest('div').classList.contains('card')) {
          recipes.selected.set(recipe)
          recipes.modal.toggle()
        }
      }}
    >
      <figure className="card__image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </figure>
      <h3 className="card__title">{recipe.strMeal}</h3>
      <div className="card__info">
        <span className="card__info--text">{recipe.strArea}</span>
        <span className="card__info--separator"></span>
        <SaveButton recipe={recipe} />
        <span className="card__info--separator"></span>
        <span className="card__info--text">{recipe.strCategory}</span>
      </div>
    </div>
  )
}

export default Card
