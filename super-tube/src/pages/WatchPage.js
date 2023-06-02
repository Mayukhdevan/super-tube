import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import LiveChat from '../components/LiveChat'
import SimilarVideos from '../components/SimilarVideos'
import CommentsList from '../components/CommentsList'
import { commentsList } from '../utils/helper'

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  const videoId = searchParams.get('v')

  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <div className='flex w-full flex-col gap-8 px-4 py-4 md:px-7'>
      <div className='flex grow flex-col gap-2 md:flex-row'>
        <iframe
          className='aspect-video w-full max-w-[720px]'
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
      <div className='flex flex-col gap-2 md:flex-row'>
        <div className='h-80 w-full md:w-3/5 p-2'>
          <h2 className='font-bold mb-2'>Comments:</h2>
          <CommentsList commentsList={commentsList}/>
        </div>
        <SimilarVideos videoId={videoId} />
      </div>
    </div>
  )
}

export default WatchPage
