import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MI_MENU</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/destacados">Destacados</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Apreniendo React
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Contacto">Action</Link></li>
            <li><Link className="dropdown-item" to="/Informacion">Another action</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>  
  )
}

export default Navbar