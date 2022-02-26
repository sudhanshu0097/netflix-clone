import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function Movie() {
  return (
    <div className='movie'>

      <Nav/>
      <Banner/>

      <Row title="Adventure Movies" fetchUrl={requests.fetchMovieAdventure} ></Row>

      <Row title="Crime Movies" fetchUrl={requests.fetchMovieCrime} ></Row>
      
    </div>
  )
}

export default Movie
