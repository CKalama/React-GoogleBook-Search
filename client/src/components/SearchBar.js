import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import FormGroup from "@material-ui/core/FormGroup"
import API from "../utils/API"




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
            //console.log(res.data.items)
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
    console.log(result);
    return (
        <Container className="search-bar-style" maxWidth="md">
            <TextField  
            id="outlined-basic" 
            label="Search a Book" 
            variant="outlined"
            onSubmit={handleSubmit} 
            onChange={handleChange}
            />
            <form onSubmit={handleSubmit}>
            <input placeholder="search" onChange={handleChange}></input>
            <button  onChange={handleSubmit}>Search</button>
            </form>

            <br></br>
            <br></br>

            <Button 
            variant="contained" 
            color="secondary" 
            //onClick={() => (console.log("button!"))}
            onChange={handleSubmit}

            >
            
            Search
            </Button>

          {result.map((eachBook) => {
              return (
                  <div>
                    <h1>{eachBook.volumeInfo.title}</h1>
                    <button onClick={() => {saveBook(eachBook)}}>Fav!</button>
                </div>
              )
          })}  
            
        </Container>
    )
}

export default SearchBar
