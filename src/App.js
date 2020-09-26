import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Users from './components/Users'




export class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
      <div>
      <div id="page-top">  
        <div id="wrapper">
       <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
             <Navbar />

                  <Switch>
                <Route exact path="/" component={MainContent} />
              </Switch>

               <Switch>
                <Route exact path="/users" component={Users} />
              </Switch>
               <Footer/>
             
              
            </div>
            </div>
  
      </div>
      </div>
      
              </div>
     </BrowserRouter>
    )
  }
}

export default App
