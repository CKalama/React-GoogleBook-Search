const router = require('express').Router();

const genericController = require("../../controller/genericController")

//matching with /api/generic
router.route('/')
    .get(genericController.genericTest)
    .get(genericController.getAllBooks)
    .post(genericController.postTest)


module.exports = router; 