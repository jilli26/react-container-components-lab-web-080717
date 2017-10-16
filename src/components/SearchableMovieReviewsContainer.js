import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const anotherUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?`
                + `api-key=${NYT_API_KEY}`;

    fetch(anotherUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviews: res.results
        })
      })
  }

  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="search" id="mySearch" onChange={this.handleSearchTerm}/>
            <input type="submit" />
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
