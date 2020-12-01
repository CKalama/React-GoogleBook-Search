import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

//
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"


function App() {
  return (
    
    
      
      

<Router>
    <div className="App">
      <Header />
      <SearchBar />

    {/* <Home />
      <Favorites /> */}
    </div>
</Router>
      
    
    
    
  );
}

export default App;
