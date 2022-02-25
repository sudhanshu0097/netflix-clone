import React from 'react';
import Banner from './Banner';
import './HomeScreen.css'
import Nav from './Nav';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner />

            <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow />

            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

            <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />

            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />

            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

           
        </div>
    );
}

export default HomeScreen;