import { useState } from 'react'
import { HamMenu, SearchLogo, UserLogo, YtLogo } from '../assets/icons'
// Redux related imports
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import useSearchRes from '../hooks/useSearchRes'

const Head = () => {
  const [searchInput, setSearchInput] = useState('')
  const searchRes = useSearchRes(searchInput)
  const [isFocused, setIsFocused] = useState(false)
  // Redux specific
  const dispatch = useDispatch()

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
    <header className='sticky top-0 flex w-full items-center justify-between gap-4 bg-white px-4 py-2 md:px-8'>
      <div className='flex items-center gap-1 md:gap-2'>
        <button type='button' onClick={toggleMenuHandler}>
          <HamMenu className='mr-2 h-7 w-5 fill-gray-500 md:mr-6 md:w-7' />
        </button>
        <div className='flex items-center'>
          <YtLogo className='spacing h-8 w-8 fill-red-600 md:h-10 md:w-10' />
          <h1 className='text-md mb-1 scale-y-150 transform font-bold md:text-xl'>
            YouTube
          </h1>
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
            className='placeholder:text-md m-1 w-full px-4 outline-none placeholder:text-gray-500 md:m-2'
          />
          <button className='flex items-center border-l border-gray-500 bg-gray-50 px-3 hover:bg-gray-100 md:px-6'>
            <SearchLogo className='h-4 w-4 fill-gray-400 md:h-6 md:w-6' />
          </button>
        </div>
        {renderSearchSuggestion()}
      </div>
      <div>
        <UserLogo className='h-9 w-9 fill-slate-700 md:h-12 md:w-12' />
      </div>
    </header>
  )
}

export default Head
