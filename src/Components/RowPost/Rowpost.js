import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'

import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const[urlId,SetUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
     // console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      //alert("network error")
    })
  })//[]
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie =(id)=>{
    console.log('///////////',id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        SetUrlId(response.data.results[0])
      }else{
        console.log('Trailer nA')
      }
    }
    )
  }
  return (
    <div className='row'>
    
      <h2>{props.title}</h2>
      <div className="posters">
      {movies.map((obj)=>{
        return(
        <img onClick={()=>{
          handleMovie(obj.id)
        }} className={props.isSmall?'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path }`} alt="" />
        )
      })}
      
      </div>
      {urlId && <Youtube opts={opts} videoId="urlId.key"/>}
    </div>
)
}

export default Rowpost
