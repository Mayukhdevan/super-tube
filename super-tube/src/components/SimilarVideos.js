import React from 'react'
import Shimmer from './Shimmer'
import VideoCardItem from './VideoCardItem'
import useVideosList from '../hooks/useVideosList'
import {
  SIMILAR_VIDEOS_API_URL,
} from '../utils/constants'

const SimilarVideos = ({ videoId }) => {
  const [videosList, isLoading] = useVideosList(
    SIMILAR_VIDEOS_API_URL + videoId
  )
  return (
    <ul className='className=h-80 flex w-full grow flex-col gap-4 md:w-2/5'>
      {isLoading ? (
        <Shimmer />
      ) : (
        videosList.map(item => (
          <VideoCardItem key={item?.video?.videoId} videoData={item?.video} />
        ))
      )}
    </ul>
  )
}

export default SimilarVideos
