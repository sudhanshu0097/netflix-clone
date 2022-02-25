import React, { useEffect, useState } from 'react';
import "./Banner.css"
import axios from "./axios.js"
import requests from './Requests';

function Banner() {


    const [movie,setMovie]=useState([]);

    useEffect(()=>
    {
        async function fetchData()
        {
            const request=await axios.get(requests.fetchNetflixOrignals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]);

            return request
        }

        fetchData()
    },[])
  
    console.log(movie)


    

    const cutdesc=(str,n)=>
    {
        if(str?.length>n)
        {
            return str.substr(0,n-1) + "..."
        }
        else
        {
            return str
        }
    }





    return (
        <header 
            className="banner"
            style={{

                backgroundSize : "",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}>
                <div className='banner_contents'>
                    <h1 className='banner_title'>{movie.name}</h1>

                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>

                    <h1 className='banner_desc'>
                        {cutdesc(`${movie.overview} `,150)}
                    </h1>
                </div>

                <div className='banner_faded'></div>
            </header>
       
    );
}

export default Banner;