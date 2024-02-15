import React from 'react'
function NotFound({title}) {
    console.log(title)
  return (
    <div className="NotFound">
        <h1>Data not found for {title && title} 🙅‍♂️ </h1>
    </div>
    )
}

export default NotFound