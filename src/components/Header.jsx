import React from 'react'
import './header.style.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className='containerHeader'>
            <div className="navbar">
            <Link to="/"><h1>Home</h1></Link>
                <Link to="/"><h1>MoviesLib</h1></Link>
                <div className="searchArea">
                    <input type='text' placeholder='busque por um filme' />
                    <button type='submit'>BUSCAR</button>
                </div>


            </div>
            <div className="img">
            </div>
        </div>
    )
}

export default Header