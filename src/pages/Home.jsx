import Header from '../components/Header'
import CardContainer from '../components/CardContainer'
import { Link } from 'react-router-dom'
import { React, useState, useEffect } from 'react'


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY

export default function HomePage() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) =>{
      const res = await fetch(url);
      const data =  await res.json();

      console.log(data)
  }


  useEffect (() => {
      const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
      console.log(topRatedUrl)



  }, [])


  return (
    <div>
      <Header />
      <CardContainer />

    </div>

  )
}
