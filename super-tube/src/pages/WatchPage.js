import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import LiveChat from '../components/LiveChat'

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  const videoId = searchParams.get('v')

  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <div className='py-4 px-4 md:px-7 flex w-full'>
      <div className='flex grow flex-col md:flex-row gap-2'>
        <iframe
          className='w-full aspect-video max-w-[720px]'
          // width='640'
          // height='360'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='Nebula | Marvel Studios&#39; Legends'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          autoPlay
        />
        <LiveChat />
      </div>
    </div>
  )
}

export default WatchPage
