import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from 'services/fetchTrending';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  useEffect(() => {
    fetchAPI('cast', movieId)
      .then(res => res.data.cast)
      .then(setCast);
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast &&
        cast.map(actor => (
          <li className={s.item} key={actor.id}>
            <img
              className={s.img}
              src={`${imgUrl}${actor.profile_path}`}
              alt={actor.name}
            />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
