import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchMovie, setLoading } from '../../actions/searchActions'

class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.params.id)
        this.props.setLoading();
    }
    render() {
      let movie = this.props?.movie
        return (
            <React.Fragment>
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
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

//You are using React router v6. which doesnt support certain functionalities in class-based components. 
//To get the params, I'll use a Higher Order Function (HOC) to make the params accessible
const WithRouter = (Child) => {
    return function WithRouter (props) {
         const params = useParams()
         return <Child {...props} params ={params} />;
   }
}

export default connect(mapStateToProps, { setLoading, fetchMovie })(WithRouter(Movie))
