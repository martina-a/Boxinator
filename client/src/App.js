import './App.css'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Form from './components/Form/Form.js'
import List from './components/List/List.js'

function App () {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/addbox' element={<Form/>} />
        <Route exact path='/listboxes' element={<List/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
