import { useState, useEffect } from 'react';
import Card from './Card';

function SearchResults({ setRecipe, toggleFavorite, recipes, isSaved }) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        setHidden(false);
    }, [recipes]);

    return recipes?.length > 0 ? (
        <div className="search-container">
            <h3 className="search-container__title">
                Search results{' '}
                <button
                    className="search-container__action"
                    onClick={() => setHidden(!hidden)}
                >
                    {hidden ? 'Show' : 'Hide'}
                </button>
            </h3>
            <div
                className="results"
                style={{
                    display: hidden ? 'none' : 'grid',
                }}
            >
                {recipes.map((recipe, index) => (
                    <Card
                        recipe={recipe}
                        isSaved={isSaved}
                        toggleSaved={toggleFavorite}
                        setRecipe={setRecipe}
                        variant="horizontal"
                        key={index}
                    />
                ))}
            </div>
        </div>
    ) : (
        ''
    );
}

export default SearchResults;
