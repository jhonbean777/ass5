import logo from './aress-logo.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

// const Navbar = () => {
//   return (
//     <nav className="primary-nav">
//       <NavLink to='/'>Home</NavLink >
//       <NavLink to='/contactus'>Contact Us</NavLink>
//       <NavLink to='/login'>Login</NavLink>
//       <NavLink to='/register'>Register</NavLink>
//     </nav>
//   )
// }

// export default Navbar


export default function Navbar() {
  return (
    <div>
      <header className="main-header fixed-top">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={logo}></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='/'>Home</NavLink >
                </li>
                <li className="nav-item">
                  <NavLink to='/contactus'>Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/login'>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/register'>Register</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

