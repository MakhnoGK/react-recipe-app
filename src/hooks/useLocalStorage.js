import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem(key)
    return localData ? JSON.parse(localData) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [key, data])

  return [data, setData]
}
