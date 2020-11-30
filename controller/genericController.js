const db = "test"

//Export conroller methods 
module.exports = {
    genericTest: function(req, res) {
        res.json(db);
    }
}