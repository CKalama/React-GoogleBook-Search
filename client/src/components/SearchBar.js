import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"




function SearchBar() {
      //providing initial value of book as empty
        //book is a string because thats what user types 
        const [book, setBook] = useState("hitting in the hook but not down"); 
        //result is an array in the useState hook bc it will display items being called from Google API 
        const [result, setResult] = useState([])
        //Here is my APIKey from Google, where I will be compromised if searched publicly. 
        const [apiKey, setApiKey] = useState("AIzaSyC9GWvnyd_oeBTnavwPxMOONUMq8eZ56hI");
    

    function handleChange(e) {

        const book = e.target.value;

        //Initializing Value to variable book
        setBook("this is us hitting the book we typed!", book);
    }
      

    function handleSubmit(e) {

        e.preventDefault();

        
        console.log(book);

    }

    return (
        <Container className="search-bar-style" maxWidth="md">
            <TextField  
            id="outlined-basic" 
            label="Search a Book" 
            variant="outlined"
            //onSubmit={handleSubmit} 
            />
            <form onSubmit={handleSubmit}>
            <input placeholder="search" onSubmit={handleSubmit}></input>
            <button  onChange={handleChange}>Search</button>
            </form>

            <br></br>
            <br></br>

            <Button 
            variant="contained" 
            color="secondary" 
            //onClick={() => (console.log("button!"))}
            onChange={handleChange}

            >
            
            Search
            </Button>
            
            
        </Container>
    )
}

export default SearchBar
