import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Route, BrowserRouter as Router, Link } from "react-router-dom"

//
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <SearchBar />
    
    </div>
    </Router>
  );
}

export default App;
