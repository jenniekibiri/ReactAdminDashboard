import React, { Component } from 'react'
import './css/sb-admin-2.css'
import './vendor/fontawesome-free/css/all.min.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export class App extends Component {
  render() {
    return (
      <div id="page-top">  
        <div id="wrapper">
        <Sidebar
      
      />
      <Navbar/>
      </div>
      </div>
    )
  }
}

export default App
