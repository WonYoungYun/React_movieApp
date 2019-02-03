import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";
import TopButton from "./components/TopButton";

class App extends Component {
  state = {
    pageNum: 1,
    isLoadPage: false
  };

  componentDidMount() {
    this.__getMovies();
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { pageNum } = this.state;
    let scroll = window.scrollY;
    if (document.body.scrollHeight - document.body.offsetHeight === scroll) {
      this.setState({
        pageNum: pageNum + 1
      });
      this.__getMovies();
    }
  };
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
    const { pageNum } = this.state;
    const getMovies = await this.__callApi();
    if (pageNum === 1) {
      this.setState({
        movies: getMovies
      });
    } else {
      const movies = this.state.movies.concat(getMovies);
      this.setState({
        movies,
        isLoadPage: true
      });
    }
  };

  __callApi = () => {
    const { pageNum } = this.state;
    return fetch(
      `https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=12&page=${pageNum}`
    )
      .then(res => res.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {this.state.movies ? this.__renderMovies() : "Loading..."}
        <TopButton isLoadPage={this.state.isLoadPage} />
      </div>
    );
  }
}

export default App;
