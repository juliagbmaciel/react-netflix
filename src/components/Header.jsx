import React, { useState } from 'react'
import './header.style.css'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault();
        console.log(search)
        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch('')
    }


    return (
        <div className='containerHeader'>
            <div className="navbar">
            <Link to="/"><h1>Home</h1></Link>
            <form onSubmit={handleForm}>
                <div className="searchArea">
                    <input type='text' placeholder='busque por um filme' onChange={(e) => setSearch(e.target.value)} />
                    <button type='submit'>BUSCAR</button>
                </div>
            </form>
            </div>
            <div className="img">
            </div>
        </div>
    )
}

export default Header