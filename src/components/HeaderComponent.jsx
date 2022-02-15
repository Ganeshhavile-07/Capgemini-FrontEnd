import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
}
render() {
return (
  <div>
      <header>
          <nav style={{paddingLeft:"20px" }} className="navbar navbar-expand-md navbar-dark bg-dark">
              <div><a href="https://images-eu.ssl-images-amazon.com/images/I/71WvCo4SUGL.png" className="navbar-brand"><h1>Welcome To Patient Management System</h1></a></div>
              
          </nav>
      </header>
  </div>
)
}
}