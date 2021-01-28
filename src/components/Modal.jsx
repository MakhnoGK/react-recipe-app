import { useContext, useEffect } from 'react'
import mapIngredients from '../utils/mapIngredients'
import mapInstructions from '../utils/mapInstructions'
import { FaTimes } from 'react-icons/fa'
import savedContext from '../context/savedContext'
import SaveButton from './SaveButton'

function Modal() {
  const recipes = useContext(savedContext)

  useEffect(() => {
    if (recipes.modal.state) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [recipes.modal.state])

  return (
    recipes.selected.get && (
      <div
        style={{ display: recipes.modal.state ? 'block' : 'none' }}
        className="modal-overlay"
        onClick={(e) => {
          if (e.target.closest('div').classList.contains('modal-overlay')) {
            recipes.modal.toggle()
          }
        }}
      >
        <div className="modal">
          <button
            className="modal__close"
            onClick={() => {
              recipes.modal.toggle()
            }}
          >
            <FaTimes />
          </button>

          <figure className="modal__image">
            <SaveButton
              recipe={recipes.selected.get}
              className={'modal__save'}
            />
            <img src={recipes.selected.get.strMealThumb} alt="Meal" />
            <figcaption className="modal__title">
              {recipes.selected.get.strMeal}
            </figcaption>
          </figure>
          <aside className="modal__aside">
            <h3 className="modal-section-title">Ingredients</h3>
            <ul className="ingredients-list">
              {mapIngredients(recipes.selected.get).map((ingredient, index) => (
                <li key={index} className="ingredients-list__item">
                  {ingredient.name}{' '}
                  {ingredient.amount !== ' ' ? `- ${ingredient.amount}` : ''}
                </li>
              ))}
            </ul>
          </aside>
          <div className="modal__content">
            <div className="modal-content-wrapper">
              <h3 className="modal-section-title">Instructions</h3>
              {mapInstructions(recipes.selected.get)}
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
