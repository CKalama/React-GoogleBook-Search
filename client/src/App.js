import logo from './logo.svg';
import './App.css';
import axios from "axios";

//
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    
    </div>
  );
}

export default App;
