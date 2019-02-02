import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this.__getMovies();
  }
  __renderMovies = () => {
    const list = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return list;
  };

  __getMovies = async () => {
    const movies = await this.__callApi();
    this.setState({
      movies
    });
  };

  __callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(res => res.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {this.state.movies ? this.__renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
