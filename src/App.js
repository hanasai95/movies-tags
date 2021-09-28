import "./App.css";
import MovieList from "./components/movieList";
import SearchBar from "./components/searchBar";
function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="movies-list-container">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
