import React from 'react'
import {useNavigate} from 'react-router-dom'
function Header() {
    const navigate = useNavigate();
  return (
    <header>
      
      <div className="logo" onClick={()=> navigate('/')}>
        <img src="https://icons4web.com/wp-content/uploads/2017/10/Movie-golden-icon-161909.jpg" alt="" />
        <h1>CineScore</h1>
      </div>

    </header>
  )
}

export default Header