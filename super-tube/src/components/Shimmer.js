import React from 'react'

const ShimmerItem = () => {
  return (
    <li>
      <div className='smimmer-card mb-2 h-[218px] w-full rounded-xl bg-gradient-to-r from-gray-300 from-45% via-gray-200 via-55% to-gray-300 to-75%'></div>
      <div className='flex flex-col gap-1 pr-3'>
        <div className='smimmer-card h-4 w-3/4 rounded-xl bg-gradient-to-r from-gray-300 from-45% via-gray-200 via-55% to-gray-300 to-75%'></div>
        <div className='smimmer-card h-3 w-1/2 rounded-xl bg-gradient-to-r from-gray-300 from-45% via-gray-200 via-55% to-gray-300 to-75%'></div>
        <div className=' smimmer-card h-3 w-1/4 rounded-xl bg-gradient-to-r from-gray-300 from-45% via-gray-200 via-55% to-gray-300 to-75%'></div>
      </div>
    </li>
  )
}

const Shimmer = () => {
  return Array(50)
    .fill('')
    .map((card, idx) => <ShimmerItem key={idx} />)
}

export default Shimmer
