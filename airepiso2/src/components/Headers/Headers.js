import React, { Component} from 'react'
import ReactDOM from 'react-dom'

 class Header extends Component {

    state = {
      name: 'Joe'
    }
  


  render () {
    return (
      <header> 
       <div className="logo"> LOGO </div>

       <nav>
        <a href = "#"> home </a>
        <a href = "#"> about us </a>
        <a href = "#"> login </a>
        <a href = "#"> Mortgage Calculator </a>
        <a href = "#" className ="register-btn"> Register </a>

      </nav>
        
      </header>
    )
  }
}

export default Headers