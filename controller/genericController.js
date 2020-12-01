const db = "test"
const bookModel = require("../models/book")

//Export conroller methods 
module.exports = {
    genericTest: function(req, res) {
        res.json(db);
    },
    postTest: function(req, res) {
        console.log("We hit the route!!!!!!", req.body)


        var newBook = {
            title: req.body.volumeInfo.title,
            author: req.body.volumeInfo.authors[0]
        }
        bookModel.create(newBook)
        .then((dataFromMongo) => {
            console.log('did we save ??', dataFromMongo)
            res.json(dataFromMongo)
        })
        // res.json(db)
    },
    getAllBooks: function(req, res) {
       // DO a  .find({}) with your bookModel
        bookModel.find({})
        .then((dataFromMongo) => {
            console.log('did we save ??', dataFromMongo)
            res.json(dataFromMongo)
        })
        
    }
}