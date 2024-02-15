
# CineScore

CineScore is a movie and series review platform where users can discover, search, and review their favorite movies and TV series.

## Features

- Search for movies and series by title.
- Browse popular picks and recommendations.
- View detailed information about movies and TV series.
- Review and rate movies and series.

## Technologies Used

- React.js for building the user interface components.
- React Router for client-side routing.
- OMDB API for fetching movie and series data.
- Framer Motion for animation effects.
- CSS for styling.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure

```
src/
|-- Components/          # React components
|   |-- Header.jsx       # Header component
|   |-- Footer.jsx       # Footer component
|   |-- Home.jsx         # Home page component
|   |-- MoviesField.jsx  # Component for displaying movie search results
|   |-- Card.jsx         # Component for displaying movie/series details
|   |-- Episode.jsx      # Component for displaying episode details
|   |-- NotFound.jsx     # Component for displaying not found message
|   |-- Loader.jsx       # Component for displaying loading spinner
|   |-- Search.jsx       # Component for search input
|-- Hooks/               # Custom React hooks
|   |-- useMovieData.jsx # Hook for fetching movie/series data
|-- App.jsx              # Main component
|-- index.css            # Global styles
|-- index.js             # Entry point
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.