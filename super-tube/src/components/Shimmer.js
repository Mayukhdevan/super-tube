import React from 'react'

const ShimmerItem = () => {
  return (
    <li>
      <div className='mb-2 h-[218px] w-full rounded-xl bg-gray-400'></div>
      <div className='flex flex-col gap-1 pr-3'>
        <div className='h-4 w-3/4 rounded-xl bg-gray-400'></div>
        <div className='h-3 w-1/2 rounded-xl bg-gray-400'></div>
        <div className='h-3 w-1/4 rounded-xl bg-gray-400'></div>
      </div>
    </li>
  )
}

const Shimmer = () => {
  return Array(50)
    .fill('')
    .map((card, idx) => <ShimmerItem id={idx} />)
}

export default Shimmer
