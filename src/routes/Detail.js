import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "../routes/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading ...</span>
        </div>
      ) : (
        <div className={styles.movie}>
          <MovieDetail
            key={movie.id}
            coverImg={movie.large_cover_image}
            longTitle={movie.title_long}
            summary={movie.description_full}
            rating={movie.rating}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
