import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './page/home'
import SpentForm from './page/SpentForm'

function App() {
  return (
    <Router>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/addspent' element={<SpentForm/>}/>

        </Routes>

    </Router>
  )
}

export default App

