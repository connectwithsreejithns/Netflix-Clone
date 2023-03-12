import React, {useEffect,useState} from 'react'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'

import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState('')
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=e4c852fff69bd7e5b1d5186c5b993243&language=en-US').then((res)=>{
            
            setMovie(res.data.results[2])
        })
    },[])
    
    return (
    
    <div style={{backgroundImage: `url(${movie?imageUrl+movie.backdrop_path:''})` }} 
    className='banner'>
            <div className='content'>
                <h1 className='title'>{movie?movie.title:''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
            <div className='fade_bottom'></div>


        </div>
    )
}

    export default Banner
