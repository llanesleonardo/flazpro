import React, { useState, useEffect } from 'react';
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import axios from 'axios';

export default function Reviews() {
  /*  const featurableWidgetId = "e1cf046c-ca86-4006-90e0-99bcf538845d";
    return (
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    );*/

    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      const fetchReviews = async () => {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&key=YOUR_API_KEY`);
        setReviews(response.data.result.reviews);
      };
      
      fetchReviews();
    }, []);

return (
    <div>
      {reviews.map(review => (
        <div key={review.time}>
          <p>{review.text}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}

  