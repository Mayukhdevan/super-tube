import React from 'react'
import CommentItem from './CommentItem'

const CommentsList = ({ commentsList }) => {
  return (
    <ul>
      {commentsList.map((item, idx) => (
        <div key={item.id}>
          <CommentItem commentItem={item} />
          <li className='ml-6 border-l-2 border-gray-500'>
            <CommentsList commentsList={item.replies} />
          </li>
        </div>
      ))}
    </ul>
  )
}

export default CommentsList
