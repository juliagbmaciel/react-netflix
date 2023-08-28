import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'



function CardContainer() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results)
    }


    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)

    }, [])

    return (
        <div>
            <div className="container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies && topMovies.map((movie) => {
                    return <Card key={movie.id} movie={movie} />
                })}
            </div>

        </div>
    )
}


export default CardContainer