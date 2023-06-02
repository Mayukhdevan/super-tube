import { useEffect, useState } from 'react'

const useVideosList = fetchUrl => {
  const [videosList, setVideosList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true)
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'e7daec2167msh7ca4e66f62126d5p120d29jsn7669f3363765',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
        },
      }
      const response = await fetch(fetchUrl, options)
      const jsonData = await response.json()
      setVideosList(jsonData.contents)
      setIsLoading(false)
    }
    getVideos()
  }, [fetchUrl])

  return [videosList, isLoading]
}

export default useVideosList
