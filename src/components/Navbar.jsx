import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>

        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     <Link className="navbar-brand" to="/">NewsMonkey</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className='nav-item'><Link className='nav-link' to="/Business">Business</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/Entertainment">Entertainment</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/">General</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/Health">Health</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/Science">Science</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/Sports">Sports</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/Technology">Technology</Link></li>
       
      </ul>
    </div>
  </div>
</nav>

      </>
    )
  }
}

export default Navbar
