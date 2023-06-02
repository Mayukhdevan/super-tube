import React from 'react'
import { randomColor } from '../utils/helper'

const CommentItem = ({ commentItem }) => {
  return (
    <li className='my-2 ml-2 flex items-start gap-2 rounded-md bg-slate-100 p-2 shadow-md'>
      <div
        className='flex h-10 w-10 items-center justify-center rounded-full'
        style={{
          background: randomColor(),
        }}
      >
        <span className='text-white'>{commentItem.name[0]}</span>
      </div>
      <div>
        <p>@{commentItem.name.toLowerCase()}</p>
        <p>{commentItem.comments}</p>
      </div>
    </li>
  )
}

export default CommentItem
