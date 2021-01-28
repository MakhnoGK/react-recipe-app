import { MdSearch } from 'react-icons/md'
import { FaDice } from 'react-icons/fa'

function Search({ getRandom, setSearchQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    setSearchQuery(formData.get('query'))
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Search recipes"
          name="query"
        />
        <button className="search-form__button" type="submit">
          <MdSearch />
        </button>
        <button
          className="search-form__button"
          onClick={(e) => {
            e.preventDefault()
            getRandom()
          }}
        >
          <FaDice />
        </button>
      </form>
    </div>
  )
}

export default Search
