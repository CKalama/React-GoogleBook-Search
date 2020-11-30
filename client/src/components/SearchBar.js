import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"

function SearchBar() {
    return (
        <Container className="search-bar-style" justifyContent="center" maxWidth="md">
            <TextField  id="outlined-basic" label="Search a Book" variant="outlined" />

            <br></br>
            <br></br>
            <Button variant="contained" color="secondary">
                Search
            </Button>
            
            
        </Container>
    )
}

export default SearchBar
