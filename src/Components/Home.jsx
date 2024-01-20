import React from 'react'
import Search from './Search'

function Home() {
    return (
        <div className="homepage">
            <div className='home-bg'></div>

            <div className="intro-section">
                <h2>Welcome to CineStream!</h2>
                <p>Discover, review, and share your favorite movies and series. Use the search bar above to find your next movie night pick!</p>
            </div>

            <Search />

            <div className="popular-section">
                <h3>Popular Picks</h3>

            </div>

        </div >
    )
}

export default Home