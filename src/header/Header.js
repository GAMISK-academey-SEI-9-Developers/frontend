import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>

    <Link to='/trips'>trips</Link>
    <Link to='/create'>New Cars</Link>

    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <li class="nav-item btn-light  ">
    <Link to="/sign-up" class="nav-link "style={{color:"black"}}  >Sign Up </Link>
  </li>
  
  <li class="nav-item btn-light  ">
    <Link to="/sign-in" class="nav-link" style={{color:"black"}} >Sign In </Link>
  </li>
    
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <li class="nav-item btn-secondary ">
    <Link to="/" class="nav-link  "style={{color:"white"}}  ><i class="material-icons">
home
</i></Link>
  </li>
    
    
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header" style={{background:"rgb(0, 51, 77)"}}>
  <h1 style={{color:"white",fontWeight:"bold"}}>RoadTrip <i class="material-icons move-rotation" style={{fontSize:"50px"}}> thumb_up</i></h1>

  <ul class="nav grey lighten-4  rounded-lg ml-auto">
   
  <li class="nav-item"> 
  { user && <span>Welcome, {user.email}</span>}  
  </li>

  { alwaysOptions }

  { user ? authenticatedOptions : unauthenticatedOptions }
  
  
  </ul>
    
  </header>
  
)

export default Header
