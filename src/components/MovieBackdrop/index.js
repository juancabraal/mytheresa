import "./style.scss";

const MovieBackdrop = ({ imageUrl }) => {
  return (
    <div
      className="movie-backdrop-image"
      style={{
        backgroundImage:
          imageUrl && `url("http://image.tmdb.org/t/p/w500/${imageUrl}")`,
      }}
    />
  );
};

export default MovieBackdrop;
