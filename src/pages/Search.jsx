import { React, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './Movie.css'

function Search() {
  const [searchParams] = useSearchParams()


  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")
  

    const getSearchMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results)
    }


    useEffect(() => {
        const searchWithQuery = `${searchURL}?${apiKey}&query=${query}`
        getSearchMovie(searchWithQuery)

    }, [query])
  
  return (
    <div>
      <h2 className="title">Resultados para: <span >{query}</span></h2>
      <div className="container" style={{color: "#fff"}}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies && movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />
        })}
      </div>

    </div>
  )
}

export default Search