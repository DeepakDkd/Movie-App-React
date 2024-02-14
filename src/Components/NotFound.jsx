import React from 'react'
import {useLocation} from 'react-router-dom'
function NotFound({title}) {
    // const location = useLocation()
    console.log(title)
  return (
    <div className="NotFound">
        <h1>Data not found for {title} 🙅‍♂️ </h1>
    </div>
    )
}

export default NotFound