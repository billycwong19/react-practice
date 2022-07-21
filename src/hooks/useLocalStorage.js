import { useState } from 'react'

const useLocalStorage = (key, intialValue) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, intialValue))

    const setValue = (value) => {
        // check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        setLocalStorageValue(value)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

  return [localStorageValue, setValue]
}

const getLocalStorageValue = (key, intialValue) => {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : intialValue;
}

export default useLocalStorage