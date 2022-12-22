const MoviePoster = ({ posterUrl }) => {
  return (
    <div className="movie-post-image">
      <img src={posterUrl && `http://image.tmdb.org/t/p/w500/${posterUrl}`} />
    </div>
  );
};

export default MoviePoster;
