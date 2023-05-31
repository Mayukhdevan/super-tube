import { useEffect, useState } from 'react'
import { YT_API_URL } from '../utils/constants'
import VideoCard from './VideoCardItem'
import Shimmer from './Shimmer'

const VideosContainer = () => {
  const [videosList, setVideosList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    setIsLoading(true)
    const response = await fetch(YT_API_URL)
    const jsonData = await response.json()
    setVideosList(jsonData.items)
    setIsLoading(false)
  }

  return (
    <ul className='grid max-h-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {isLoading ? (
        <Shimmer />
      ) : (
        videosList.map(item => <VideoCard key={item.id} videoData={item} />)
      )}
    </ul>
  )
}

export default VideosContainer
