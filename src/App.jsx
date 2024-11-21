import React from 'react'
import MovieCard from './components/MovieCard'
import Movielist from './components/Movielist'

const App = () => {
  return (
    <div className='container mt-5'>
      <MovieCard/>
      
      <Movielist/>
    </div>
  )
}

export default App