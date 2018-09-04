import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

const NYT_API_KEY = 'de60a1556ca649208556363ea0bb4e62';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json'
            + `?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  fetchLatestReviews = () => {
    fetch(URL)
    .then(response => response.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }

  componentDidMount() {
    this.fetchLatestReviews()
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <h2>Latest Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
