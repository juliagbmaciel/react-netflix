import React from 'react'
import './card.style.css'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Card({ movie, showLink = true }) {
    const imageUrl = import.meta.env.VITE_IMG
    return (
        <div>
            <div className="containerCard">
                <div className="imgFilme"><img src={imageUrl + movie.poster_path
                } alt={movie.title} /></div>
                <div className="play">
                    <AiOutlinePlayCircle size={60} color='#fff' />
                </div>

                <div className="nomeFilme">
                    <p><FaStar />  {movie.vote_average}</p>
                    <button className='detail'>
                        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card