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

      <Row title="Drama Movies" fetchUrl={requests.fetchMovieDrama} ></Row>

      <Row title="Family Movies" fetchUrl={requests.fetchMovieFamily} ></Row>

      <Row title="History Movies" fetchUrl={requests.fetchMovieHistory} ></Row>

      <Row title="Horror Movies" fetchUrl={requests.fetchMovieHorror} ></Row>

      


      
    </div>
  )
}

export default Movie
