import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                + `api-key=${NYT_API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const reviews = data.results

        this.setState({
          reviews: reviews
        })
      })
  }

  render() {


    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default LatestMovieReviewsContainer
