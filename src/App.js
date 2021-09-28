import "./App.css";
import MovieList from "./components/movieList";
import SearchBar from "./components/searchBar";
function App() {
  return (
    <div className="App">
      <div>
        <SearchBar />
      </div>
      <div>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
