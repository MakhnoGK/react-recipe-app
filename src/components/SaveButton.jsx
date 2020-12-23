import savedContext from '../context/savedContext'
import { useContext } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

function SaveButton({ recipe, className = 'card__action' }) {
  const recipes = useContext(savedContext)
  const status = recipes.saved.status(recipe.idMeal)

  return (
    <button className={className} onClick={() => recipes.saved.toggle(recipe)}>
      {status ? <BsHeartFill /> : <BsHeart />}
    </button>
  )
}

export default SaveButton
