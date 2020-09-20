import React, { Component } from 'react'
import './css/sb-admin-2.css'
import './vendor/fontawesome-free/css/all.min.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
export class App extends Component {
  render() {
    return (
      <div id="page-top">  
        <div id="wrapper">
        <Sidebar/>
            <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <MainContent />
              <Footer/>
            </div>
            </div>
  
      </div>
      </div>
    )
  }
}

export default App
