import React, { Component } from 'react'

export class MainNav extends Component {
 
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg  fixed-top" style={{paddingTop:'30px'}}>
  <a className="navbar-brand" href="/">CHRISSO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between"  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <a className="nav-link" href="/">Skills <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/" >Projects</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contacts</a>
      </li>
    </ul>
   
  </div>
</nav>
      </div>
    )
  }
}

export default MainNav
