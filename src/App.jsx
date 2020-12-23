import { useState } from 'react'
import useSearch from './hooks/useSearch'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SearchResults from './components/SearchResults'
import savedContext from './context/savedContext'
import searchContext from './context/searchContext'

import './App.css'
import useSavedRecipes from './hooks/useSavedRecipes'
import SavedRecipes from './components/SavedRecipes'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [savedRecipes, toggleRecipeInStorage, isSaved] = useSavedRecipes()
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const [setSearchQuery, searchResults] = useSearch()

  const getRandomRecipe = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    )
    const data = await response.json()
    setSelectedRecipe(data.meals[0])
    setModalOpen(true)
  }

  return (
    <savedContext.Provider
      value={{
        saved: {
          get: savedRecipes,
          toggle: toggleRecipeInStorage,
          status: isSaved
        },
        selected: {
          get: selectedRecipe,
          set: (recipe) => setSelectedRecipe(recipe)
        },
        modal: {
          state: modalOpen,
          toggle: () => setModalOpen(!modalOpen)
        }
      }}
    >
      <Modal />
      <div className="container">
        <searchContext.Provider
          value={{
            setSearchQuery,
            searchResults
          }}
        >
          <Header getRandom={getRandomRecipe} setSearchQuery={setSearchQuery} />

          <main>
            <div className="content-wrapper">
              <SearchResults recipes={searchResults} />

              {savedRecipes.length === 0 ? (
                <p>There are no saved recipes</p>
              ) : (
                <SavedRecipes recipes={savedRecipes} />
              )}
            </div>
          </main>
        </searchContext.Provider>

        <Footer />
      </div>
    </savedContext.Provider>
  )
}

export default App
