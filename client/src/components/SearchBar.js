import React, { useState } from 'react'
//import Button from "@material-ui/core/Button";
//import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import API from "../utils/API"
import "../App.css";
import { Link } from "react-router-dom";




function SearchBar() {
      //providing initial value of book as empty
        //book is a string because thats what user types 
        const [book, setBook] = useState(""); 
        //result is an array in the useState hook bc it will display items being called from Google API 
        const [result, setResult] = useState([])
        //Here is my APIKey from Google, where I will be compromised if searched publicly. 
        const [apiKey, setApiKey] = useState("AIzaSyC9GWvnyd_oeBTnavwPxMOONUMq8eZ56hI");
    

    function handleChange(e) {

        const bookTypingOnChange = e.target.value;

        //console.log('in the on submit!!',bookTypingOnChange);
        //Initializing Value to variable book
        setBook(bookTypingOnChange);
    }
      

    function handleSubmit(e) {

        e.preventDefault();

        API.getPosts(book).then((res) => {
            console.log(res.data.items)
            setResult(res.data.items)
        })
       

    }

    function saveBook(book) {
        // e.preventDefault();

        API.savePost(book).then((resFromBackendRoute) => {
            console.log(resFromBackendRoute)
        })
    }

   


    //console.log('BOOK STATE!!', book)
    //console.log(result);
    return (
        <Container className="search-bar-style" maxWidth="md">
            {/* <TextField  
            id="outlined-basic" 
            label="Search a Book" 
            variant="outlined"
            onSubmit={handleSubmit} 
            onChange={handleChange}
            /> */}
            <form onSubmit={handleSubmit} className="form-style">
            <input placeholder="Type a Book Title..." onChange={handleChange} id="input-style"></input>
            <br></br>
            <button  onChange={handleSubmit}>Search</button>
            </form>

            <br></br>
            <br></br>

            {/* <Button 
            variant="contained" 
            color="secondary" 
            //onClick={() => (console.log("button!"))}
            onChange={handleSubmit}

            >
            
            Search
            </Button> */}

            <hr></hr>

          {result.map((eachBook) => {
              return (
                  <div className="book-output">
                    <img src={eachBook.volumeInfo.imageLinks.thumbnail} alt="Book-Img" id="book-img"></img>
                    <h1>{eachBook.volumeInfo.title}</h1>
                        <h3>{eachBook.volumeInfo.authors}</h3>
                        <a href={eachBook.saleInfo.buyLink} target="_blank" rel="noreferrer" className="book-link">Buy On GoogleBooks</a>
                        <br></br>
                        <br></br>
                    
                    <footer>   
                    <button onClick={() => {saveBook(eachBook)}}>Save to Favorites</button>
                    <hr></hr>
                    </footer>
                </div>
              )
          })}  
            
        </Container>
    )
}

export default SearchBar
