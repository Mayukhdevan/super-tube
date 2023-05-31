import React from 'react'
import { Link } from 'react-router-dom'

const VideoCardItem = ({ videoData }) => {
  const { snippet } = videoData
  const views = videoData?.statistics?.viewCount
  return (
    <Link to={`watch?v=${videoData.id}`}>
      <li>
        <img
          className='mb-2 w-full rounded-xl'
          src={snippet?.thumbnails?.medium?.url}
          alt='thumbnail'
        />
        <div>
          {/* <img src={} alt='channel logo'/> */}
          <div className='flex flex-col gap-1 pr-3'>
            <h1 className='text-sm font-semibold'>{snippet?.title}</h1>
            <p className='text-xs text-gray-400'>{snippet?.channelTitle}</p>
            <p className='text-xs text-gray-400'>
              {views.length > 3
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
