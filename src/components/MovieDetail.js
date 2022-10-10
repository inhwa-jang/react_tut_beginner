import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import styles from "../routes/Detail.module.css";

const MovieDetail = ({ coverImg, title, longTitle, summary, rating }) => {
  return (
    <div className={styles.movie__wrap}>
      <div className={styles.movie__content}>
        <div className={styles.home__button}>
          <Link to={"/movie"}>
            <BsFillArrowLeftSquareFill size="50" color="rgb(104, 144, 190)" />
          </Link>
        </div>
        <img src={coverImg} alt={title} />
        <h1 className={styles.movie__title}>{longTitle}</h1>
        <p className={styles.movie__summary}>{summary}</p>
        <h3 className={styles.movie__rating}>Rating : {rating} / 10</h3>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  longTitle: PropTypes.string.isRequired,
  summary: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;
