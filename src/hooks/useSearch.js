import { useState, useEffect } from 'react';

export default function useSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const getSearchedItems = async () => {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
            );
            const data = await response.json();

            setSearchResults(searchQuery.length === 0 ? [] : data.meals);
        };

        getSearchedItems();
    }, [searchQuery]);

    return [setSearchQuery, searchResults];
}
