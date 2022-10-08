import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const MovieDetail = ({ coverImg, title, longTitle, summary, rating }) => {
  return (
    <div>
      <Link to={"/movie"}>
        <BsFillArrowLeftSquareFill />
      </Link>
      <img src={coverImg} alt={title} />
      <h1>{longTitle}</h1>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <h3>Rating: {rating} / 10</h3>
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
