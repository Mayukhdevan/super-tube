import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BsFillChatRightFill } from 'react-icons/bs'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { IoIosSend } from 'react-icons/io'
import { name, randomColor, randomMessage } from '../utils/helper'

const LiveChat = () => {
  const [myMsg, setMyMsg] = useState('')
  const dispatch = useDispatch()
  const messageList = useSelector(store => store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          id: uuidv4(),
          name: name(),
          message: randomMessage(),
          color: randomColor(),
        })
      )
    }, 1000)

    return () => clearInterval(i)
  }, [])

  const sendMessage = e=> {
    e.preventDefault()
    dispatch(
      addMessage({
        id: uuidv4(),
        name: 'Mayukh Devan',
        message: myMsg,
        color: randomColor(),
      })
    )
    setMyMsg('')
  }

  return (
    <div className='flex h-72 grow-0 flex-col justify-between rounded-lg border-2 border-gray-300 bg-slate-100 md:h-auto md:grow'>
      <div className='flex items-center gap-2 border-b border-gray-300 p-2'>
        <h3 className='font-semibold'>Live chat</h3>
        <BsFillChatRightFill className='relative -bottom-1 fill-gray-500' />
      </div>
      <div className=''>
        <ul className='flex max-h-[305px] flex-col-reverse overflow-y-auto'>
          {messageList.map(item => (
            <ChatMessage
              key={item.id}
              name={item.name}
              message={item.message}
              color = {item.color}
            />
          ))}
        </ul>
        <form onSubmit={sendMessage} className='flex items-center gap-2 p-2'>
          <input
            value={myMsg}
            onChange={e => setMyMsg(e.target.value)}
            type='text'
            className='w-full rounded-full border border-gray-400 p-2 text-sm outline-blue-500'
          />
          <button
            type='submit'
            className='flex items-center justify-center rounded-full bg-gray-400 p-[10px]'
          >
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default LiveChat
