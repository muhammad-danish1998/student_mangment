import React from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from "react-redux-firebase";

const Navbar = () => {
  const firebase = useFirebase();
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand" href="/">
    <img
            src={require("../../assets/logo.png")}
            height="50px"
            alt="logo"
          />
    </a>

    <div>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/studentForm" className="btn btn-primary mr-3">
            Add Student
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-a dropdown-toggle"
            href="!#"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            <img src = {require("../../assets/admin.png")}
             alt = 'admin img'
             height = '30px' 
               style ={{borderRadius :'80%'}}
             />
            <span className="ml-2 navbar-text">M.Danish</span>
          </a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="">
              Profile
            </Link>
            <a className="dropdown-item" href="!#" 
              onClick={() => firebase.logout()}
              >
              Logout
            </a>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="">
              Ads
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
