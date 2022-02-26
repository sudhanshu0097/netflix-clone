import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function Tv() {
  return (
    <div className='tv'>
        <Nav/>
        <Banner/>

        <Row title="Tv Action" fetchUrl={requests.fetchTvAction} />

        <Row title="Tv Comedy" fetchUrl={requests.fetchTvComedy} />

        <Row title="Tv Crime" fetchUrl={requests.fetchTvCrime} />

        <Row title="Tv Family Show" fetchUrl={requests.fetchTvFamily} />

        <Row title="Tv Kids" fetchUrl={requests.fetchTvKids} />

        <Row title="Tv Sci-Fiction" fetchUrl={requests.fetchTvScifi} />

        <Row title="Tv Reality" fetchUrl={requests.fetchTvReality} />

        
      
    </div>
  )
}

export default Tv
