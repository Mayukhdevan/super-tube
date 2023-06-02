import { VIDEOS_API_URL } from '../utils/constants'
import VideoCard from './VideoCardItem'
import Shimmer from './Shimmer'
import useVideosList from '../hooks/useVideosList'

const VideosContainer = () => {
  const [videosList, isLoading] = useVideosList(VIDEOS_API_URL)

  return (
    <ul className='grid max-h-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {isLoading ? (
        <Shimmer />
      ) : (
        videosList.map(item => (
          <VideoCard key={item?.video?.videoId} videoData={item?.video} />
        ))
      )}
    </ul>
  )
}

export default VideosContainer
