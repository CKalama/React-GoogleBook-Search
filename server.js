const express = require('express');
const routes = require("./routes");
const mongoose = require('mongoose');


//instance of Express
const app = express();

//Port 
const PORT = process.env.PORT || 9001;

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};


//Setting up API to put favorites into MongoDB
// app.get()

//API and View Routes 
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoogleBook_db");

//Fire up Server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening at http://localhost:${PORT}`)
    };
});