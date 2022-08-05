import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../actions/searchActions'

const Movie = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        (async () => {
            dispatch(fetchMovie(id))
        })()
     // eslint-disable-next-line
    }, [id])

    const {movie} = useSelector(state => state.movies)
    
    return (
        <>
            <div className="movie--container">
                <div className="card--body">
                    <img src={movie?.Poster} alt={movie?.Title} className="thumbnail" />
                </div>
                <div className="movie--info">
                    <h2 className="movie--title">{movie?.Title}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genre:</strong> {movie?.Genre}
                        </li>
                        <li className="list-group-item">
                            <strong>Released:</strong>{movie?.Released}
                        </li>
                        <li className="list-group-item">
                            <strong>Writer:</strong> {movie?.Writer}
                        </li>
                        <li className="list-group-item">
                            <strong>Rated:</strong> {movie?.Rated}
                        </li>
                        <li className="list-group-item">
                            <strong>IMDB Rating:</strong> {movie?.imdbRating}
                        </li>
                        <li className="list-group-item">
                            <strong>Actors:</strong> {movie?.Actors}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="movie--subcontainer">
                <div className="about--movie">
                    <h3>About</h3>
                    <hr />
                    <Link to={'/'} target="_blank"
                        rel="noopener noreferrer"
                        className='btn btn-primary'>
                        View on  IMDB
                    </Link>
                    <Link to={'/'} className="btn btn-default text-light">
                        Go back to Search
                    </Link>
                </div>
            </div>
         </>

    )
}

export default Movie