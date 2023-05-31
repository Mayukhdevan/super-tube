import React from 'react'
import Button from './Button'

const buttonsList = [
  'All',
  'Computer programming',
  'Gaming',
  'Marvel Cinematic Universe',
  'AI',
  'Gadgets',
  'Mixes',
  'Live',
  'Music',
  'Trailer',
  'Scene',
  'Action-Adventure game',
  'Recently uploaded',
  'Watch',
  'New to you',

]

const ButtonsList = () => {
  return (
    <div className='flex p-4 gap-2 overflow-x-scroll no-scrollbar'>
      {buttonsList.map(btn => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  )
}

export default ButtonsList
