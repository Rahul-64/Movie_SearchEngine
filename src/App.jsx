import React from 'react'
import "./css/App.css"
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'


const App = () => {
  return (

    //wrap with provider
    <MovieProvider>
      <Navbar/>
    <main className="main-content">
    <Routes>
      <Route path='/'  element = {<Home/>}/>
      <Route path='/favorites' element = {<Favorites/>}/>
    </Routes>
     </main>
    </MovieProvider>
  )
}


export default App