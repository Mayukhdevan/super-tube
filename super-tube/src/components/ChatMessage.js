import React from 'react'

const ChatMessage = ({ name, message, color }) => {
  return (
    <li className='mt-auto flex flex-wrap items-center gap-2 p-2'>
      <div
        className='flex h-7 w-7 items-center justify-center rounded-full'
        style={{
          background: color,
        }}
      >
        <span className='text-white'>{name[0]}</span>
      </div>
      <h3 className='font-bold'>{name}</h3>
      <p>{message}</p>
    </li>
  )
}

export default ChatMessage
