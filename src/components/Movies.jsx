/* eslint-disable react/prop-types */

function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
        {
            movies.map(movie => (
                <li className="movie" key={movie.id}>
                    <h3 title={movie.title}>{movie.title}</h3>
                    <p title={movie.year}>{movie.year}</p>
                    <img title={movie.title} src={movie.poster} alt={movie.title} />
                </li>
            ))
        }
    </ul>
  )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron peliculas para esta búsqueda</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}