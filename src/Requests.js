const API_KEY="a6e844d0ea08a60dcbd5594acaff195d";

const requests={

    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

    fetchTvAction:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchTvComedy:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchTvCrime:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchTvFamily:`/discover/tv?api_key=${API_KEY}&with_genres=10751`,
    fetchTvScifi:`/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchTvKids:`/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchTvReality:`/discover/tv?api_key=${API_KEY}&with_genres=10764`,

    fetchMovieAction:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchMovieAdventure:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchMovieCrime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchMovieFamily:`/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchMovieHistory:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchMovieSci:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchMovieHorror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMovieDrama:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchMovieThriller:`/discover/movie?api_key=${API_KEY}&with_genres=53`,

    
    
};

export default requests;