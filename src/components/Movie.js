import React from "react";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

const Movie = ({ title, poster, genres, synopsis }) => {
  return (
    <div className="movie">
      <div className="movie_columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="movie_columns">
        <h1>{title}</h1>
        <div className="movie_genres">
          <MovieGenresList genres={genres} />
        </div>
        <div className="movie_synodivsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
};

const MoviePoster = ({ poster, alt }) => {
  return <img src={poster} alt={alt} title={alt} className="movie_poster" />;
};

const MovieGenresList = ({ genres }) => {
  return genres.map((genre, index) => (
    <MovieGenres genre={genre} key={index} />
  ));
};

const MovieGenres = ({ genre }) => {
  return <span className="movie_genre">{genre}</span>;
};

export default Movie;
