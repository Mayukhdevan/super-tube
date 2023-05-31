import React from 'react'
import ButtonsList from '../components/ButtonsList'
import VideosContainer from '../components/VideosContainer'

const MainContainer = () => {
  return (
    <div className='grow'>
      <ButtonsList />
      <VideosContainer />
    </div>
  )
}

export default MainContainer
