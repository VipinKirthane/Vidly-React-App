import React, { Component } from "react";
import "../src/App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = () => {};

  render() {
    console.log(getMovies);
    return (
      <Movies />
      // <main className="container">
      //   <h1>Vidly</h1>

      //   <table>
      //     <thead>
      //       <tr>
      //         <th>Title</th>
      //         <th>Genre</th>
      //         <th>Stock</th>
      //         <th>Rate</th>
      //         <th>Edit Quantity</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>{/* <th>{this.getMovies.movies[0].title}</th> */}</tr>
      //     </tbody>
      //   </table>
      // </main>
    );
  }
}

export default App;
