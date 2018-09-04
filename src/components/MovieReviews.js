// Code MovieReviews Here

import React from 'react'

const Review = ({title, pick, byline, headline, summary}) => {
  return (
    <div className='review' key={title}>
      <div>Title: {title}</div>
      <div>Critics Pick: {pick}</div>
      <div>Byline: {byline}</div>
      <div>Headline: {headline}</div>
      <div>Summary: {summary}</div>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
      {reviews.map(review =>
        <Review
          title={review.display_title}
          pick={review.critics_pick}
          byline={review.byline}
          headline={review.headline}
          summary={review.summary_short}
          key={review.display_title}/>
       )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
