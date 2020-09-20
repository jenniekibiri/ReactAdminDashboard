import React, { Component } from 'react'
import './css/sb-admin-2.css'
import './vendor/fontawesome-free/css/all.min.css'
import Sidebar from './components/Sidebar'
export class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
      </div>
    )
  }
}

export default App
