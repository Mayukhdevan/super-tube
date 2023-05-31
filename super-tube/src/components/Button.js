import React from 'react'

const Button = ({name}) => {
  return (
    <button type="button" className='bg-gray-100 text-sm rounded-lg shrink-0 px-3 py-1'>
      {name}
    </button>
  )
}

export default Button