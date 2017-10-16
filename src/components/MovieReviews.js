import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'

const Reviews = ({reviews}) => {

  const reviewsDiv = reviews.map((review, index) => {
    return <div className="review" key={index}>
      <h2>{review.display_title}</h2>
      <p>{review.byline}</p>
      <p>{review.summary_short}</p>
    </div>
  })

  return(
      <div className="review-list">
        {reviewsDiv}
      </div>
    )
}

Reviews.defaultProps = {
  reviews: []
}



export default Reviews
