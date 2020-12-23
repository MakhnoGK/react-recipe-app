import Search from './Search'

import dietImage from '../assets/images/diet.svg'
import '../styles/header.css'

function Header({ getRandom, setSearchQuery }) {
  return (
    <header className="app-bar">
      <h1 className="logo">
        <img className="logo__image" src={dietImage} alt="Logo" />
        <span className="logo__text">Recipegram</span>
      </h1>

      <Search getRandom={getRandom} setSearchQuery={setSearchQuery} />
    </header>
  )
}

export default Header
