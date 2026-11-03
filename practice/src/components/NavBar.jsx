import React, { useState } from 'react'
import {Link , Route ,Routes, NavLink} from 'react-router-dom'

const navigation = [
      {label:"Home", path:"/"},
      {label:"Blog",path:"/blog"},
      {label:"About",path:"/about"},
            
];

function NavBar() {

  const [menuOpen,setMenuOpen] = useState(false);

  const closedMenu = () =>{
    setMenuOpen(false);
  }
 

  return (
        <header className="site-header">
            <div className="container navbar">
              <Link to="/" className="brand" onClick={closedMenu}>
              <span className="brand-icon" aria-hidden="true">⚙</span>
              <span>RAMA<strong>AUTO PARTS</strong></span>
              </Link>
           
            
            <button
              type='button'
              className='menu-toggle'
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>


              <nav id="primary-navigation" 
                className={`nav-link ${menuOpen ? "nav-open" : ""}`}
                aria-label="Main Navigation"
              >
                {navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path==="/"}
                    onClick={closedMenu}
                    className={({isActive})=>{

                      return isActive ?"nav-link active" : "nav-link";}}
                  >
                    {item.label}
                  </NavLink>
                ))}

                  <Link to={"/about"}
                    className="nav-cta"
                    onClick={closedMenu}
                  
                  >
                    Contact Us
                  </Link>
           </nav>
        </div>
      </header>
    
  )
}

export default NavBar