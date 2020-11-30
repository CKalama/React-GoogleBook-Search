const router = require('express').Router();
const genericRoute = require("./generic")


//generic routes
router.use("/generic", genericRoute)

module.exports = router;