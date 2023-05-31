import { useEffect, useState } from 'react'
import { HamMenu, SearchLogo, UserLogo, YtLogo } from '../assets/icons'
// Redux related imports
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YT_AUTOCOMPLETE } from '../utils/constants'
import { cacheSearch } from '../utils/searchSlice'

const Head = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchRes, setSearchRes] = useState([])
  const [isFocused, setIsFocused] = useState(false)
  // Redux specific
  const dispatch = useDispatch()
  const searchCache = useSelector(store => store.search.searchData)

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSearchRes(searchCache[searchInput])
      } else {
        searchSuggestions()
      }
    }, 200)

    return () => clearTimeout(timerId)
  }, [searchInput])

  const searchSuggestions = async () => {
    const response = await fetch(YT_AUTOCOMPLETE + searchInput)
    const data = await response.json()
    setSearchRes(data[1])
    dispatch(cacheSearch({ [searchInput]: data[1] }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  const renderSearchSuggestion = () => {
    if (searchRes.length === 0) return null

    return (
      <ul className='z-100 absolute left-0 right-0 top-full flex w-full flex-col rounded-lg bg-white py-4 shadow-2xl'>
        {searchRes.map(item => (
          <div
            key={item}
            className='flex select-none gap-4 px-4 py-2 hover:bg-gray-100'
          >
            <SearchLogo className='h-6 w-6 fill-gray-400' />
            <li>{item}</li>
          </div>
        ))}
      </ul>
    )
  }

  return (
    <header className='bg-white sticky top-0 flex w-full items-center justify-between gap-4 px-4 py-2 md:px-8'>
      <div className='flex items-center gap-1 md:gap-2'>
        <button type='button' onClick={toggleMenuHandler}>
          <HamMenu className='mr-2 md:mr-6 h-7 w-5 md:w-7 fill-gray-500' />
        </button>
        <div className='flex items-center'>
          <YtLogo className='spacing h-8 w-8 md:h-10 md:w-10 fill-red-600' />
          <h1 className='scale-y-150 mb-1 transform text-md md:text-xl font-bold'>YouTube</h1>
        </div>
      </div>
      <div className='relative w-full max-w-2xl'>
        <div
          className={`${
            isFocused
              ? 'border-2 border-blue-500 shadow-gray-300'
              : 'border-gray-400  shadow-gray-200'
          } flex w-full overflow-hidden rounded-full border shadow-inner`}
        >
          <input
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type='search'
            placeholder='Search'
            className='placeholder:text-md m-1 md:m-2 w-full px-4 outline-none placeholder:text-gray-500'
          />
          <button className='flex items-center border-l border-gray-500 bg-gray-50 md:px-6 px-3 hover:bg-gray-100'>
            <SearchLogo className='md:h-6 md:w-6 h-4 w-4 fill-gray-400' />
          </button>
        </div>
        {renderSearchSuggestion()}
      </div>
      <div>
        <UserLogo className='md:h-12 md:w-12 h-9 w-9 fill-slate-700' />
      </div>
    </header>
  )
}

export default Head
