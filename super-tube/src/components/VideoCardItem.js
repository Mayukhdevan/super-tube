import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const VideoCardItem = ({ videoData }) => {
  const [isMouseInn, setIsMouseInn] = useState(false)
  const timerRef = useRef(null)
  const views = videoData?.stats?.views || videoData?.stats?.viewers
  console.log(videoData)
  return (
    <Link to={`/watch?v=${videoData.videoId}`}>
      <li
        onMouseEnter={() => {
          const i = setTimeout(() => {
            setIsMouseInn(true)
          }, 500)
          timerRef.current = i
        }}
        onMouseLeave={() => {
          clearTimeout(timerRef.current)
          setIsMouseInn(false)
        }}
      >
        <img
          className='mb-2 w-full rounded-xl'
          src={
            isMouseInn && videoData?.movingThumbnails
              ? videoData?.movingThumbnails[0]?.url
              : videoData?.thumbnails[1]?.url || videoData?.thumbnails[0]?.url
          }
          alt='video'
        />
        <div className='flex items-start gap-2'>
          <img
            className='h-10 w-10 rounded-full'
            src={videoData?.author?.avatar[0]?.url}
            alt='channel logo'
          />
          <div className='flex flex-col gap-1 pr-3'>
            <h1 className='bg-slate-900 text-sm font-semibold text-black'>
              {videoData?.author?.avatar?.title}
            </h1>
            <p className='text-xs text-gray-400'>{videoData?.title}</p>

            <p className='text-xs text-gray-400'>
              {views && views > 999
                ? `${Math.round(parseInt(views) / 1000)}K views`
                : `${views} views`}
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default VideoCardItem
