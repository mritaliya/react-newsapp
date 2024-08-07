import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

export class App extends Component {
  

  render() {
    
    return (
      <>
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/Business'  element={<News pagesize={5} key='business' category="business"/>}></Route>
            <Route path='/Entertainment'  element={<News pagesize={5} key='Entertainment' category="entertainment"/>}></Route>
          <Route path='/'  element={<News pagesize={5} key='general' category="general"/>}></Route>
          <Route path='/Health'  element={<News pagesize={5} key='Health' category="health"/>}></Route>
          <Route path='/Science' element={<News pagesize={5} key='Science'  category="science"/>}></Route>
          <Route path='/Sports' element={<News pagesize={5} key='Sports' category="sports"/>}></Route>
          <Route path='/Technology'  element={<News pagesize={5} key='Technology' category="technology"/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
