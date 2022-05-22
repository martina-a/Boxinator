import './App.css'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Form from './components/Form.js'
import List from './components/List.js'

function App () {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/addbox' element={<Form/>} />
        <Route exact path='/listboxes' element={<List/>} />
      </Routes>
    </HashRouter>
  // <Form></Form>
  // <List></List></>
  )
}

export default App
