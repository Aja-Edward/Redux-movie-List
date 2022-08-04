import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchMovie, setLoading } from '../../actions/searchActions'


export class Movie extends Component {

    onComponentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }
    render() {
        return (
            <React.Fragment>
                <div className="movie--container">
                    <div className="card--body">
                        <img src="" alt="" className="thumbnail" />
                    </div>
                    <div className="movie--info">
                        <h2 className="movie--title">Movie Title</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> Movie Genre
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> Movie Released
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> Movie Writer
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> Movie Rated
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> Movie IMDB Rating
                            </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong> Movie Actors
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

export default connect(mapStateToProps, { setLoading, fetchMovie })(Movie)
