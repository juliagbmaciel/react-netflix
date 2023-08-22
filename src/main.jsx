import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/movie:id' element={<Movie/>}/>
          <Route path='/search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
