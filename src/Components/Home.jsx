import React from 'react'
import Search from './Search'

function Home() {
    return (
        <div className="homepage">
            <div className='home-bg'></div>

            <div className="intro-section">
                <h2>Welcome to CineScore!</h2>
                <p>Discover, review, and share your favorite movies and series. Use the search bar above to find your next movie night pick!</p>
            </div>

            <Search />


        </div >
    )
}

export default Home