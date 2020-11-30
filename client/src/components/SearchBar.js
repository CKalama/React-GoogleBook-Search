import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"




function SearchBar() {

    handleChange = (e) => {
        //providing initial value of book as empty
        //book is a string because thats what user types 
        const [book, setBook] = useState("") 
        //result is an array in the useState hook bc it will display items being called from Google API 
        const [result, setResult] = useState([])
        //Here is my APIKey from Google, where I will be compromised if searched publicly. 
        const [apiKey, setApiKey] = useState("");
    }

    handleSubmit = (e) => {

    }

    return (
        <Container className="search-bar-style" maxWidth="md">
            <TextField  
            id="outlined-basic" 
            label="Search a Book" 
            variant="outlined"
            onSubmit={handleSubmit} 
            />

            <br></br>
            <br></br>

            <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => (console.log("button!"))}
            // onChange={onChange}

            >
            
            Search
            </Button>
            
            
        </Container>
    )
}

export default SearchBar
