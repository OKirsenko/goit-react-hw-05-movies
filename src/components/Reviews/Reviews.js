import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=72b81a8bb303f29cc8e049d7d5cd52a0&language=en-US`
      )
      .then(res => res.data.results)
      .then(setReviews);
  }, [movieId]);
  return (
    <ul className={s.list}>
      {reviews &&
        reviews.map(review => (
          <li className={s.item} key={review.id}>
            <h3 className={s.header}>Author: {review.author}</h3>
            <p className={s.descr}>{review.content}</p>
          </li>
        ))}
    </ul>
  );
}
