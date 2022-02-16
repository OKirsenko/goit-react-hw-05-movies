import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';
import fetchAPI from 'services/fetchTrending';

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetchAPI('review', movieId)
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
