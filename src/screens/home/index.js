import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library'
import Feed from '../feed'
import Trending from '../trending'
import Player from '../player'
import Favorites from '../favorites'
import Login from '../auth/login'
import './home.css'
import Sidebar from '../../components/sidebar'

export default function Home() {
    const [token, setToken] = useState("");
    
    return (
      <Router>
          <div className='main-body'>
            <Sidebar />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Library />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/player' element={<Player />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </div>
      </Router>
  )
}
