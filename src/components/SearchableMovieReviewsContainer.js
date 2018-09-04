import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'de60a1556ca649208556363ea0bb4e62';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.fetchedSearchedReviews(this.state.searchTerm)
            // console.log(this.state.searchTerm);
          }}>
          <input
            type='text'
            value={this.state.searchTerm}
            onChange={(e) => {
              this.setState({
                searchTerm: e.target.value
              })
            }}/>
          <input type='submit' value='submit' />
        </form>
        {/* {this.state.searchTerm !== '' ? <div><h2>Searched Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} /></div> : null } */}
        <div>
          <h2>Searched Movie Reviews:</h2>
          <MovieReviews reviews={this.state.reviews} />
        </div>
     </div>
    )
  }

  fetchedSearchedReviews(value) {
    fetch(URL + `${value}`)
    .then(response => response.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
      // console.log(reviews.results);
    })
  }

  componentDidMount() {
    this.fetchedSearchedReviews()
  }

}

export default SearchableMovieReviewsContainer
