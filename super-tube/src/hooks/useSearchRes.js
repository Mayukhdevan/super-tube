import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { YT_AUTOCOMPLETE } from '../utils/constants'
import { cacheSearch } from '../utils/searchSlice'

const useSearchRes = (searchInput) => {
  const [searchRes, setSearchRes] = useState([])
  const dispatch = useDispatch()
  const searchCache = useSelector(store => store.search.searchData)
  useEffect(() => {
    const searchSuggestions = async () => {
      const response = await fetch(YT_AUTOCOMPLETE + searchInput)
      const data = await response.json()
      setSearchRes(data[1])
      dispatch(cacheSearch({ [searchInput]: data[1] }))
    }

    const timerId = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSearchRes(searchCache[searchInput])
      } else {
          searchSuggestions()
        }
      }, 200)

    return () => clearTimeout(timerId)
  }, [searchInput])

  return searchRes
}

export default useSearchRes