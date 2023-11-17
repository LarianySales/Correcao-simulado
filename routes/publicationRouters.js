const express = require("express")
const router = express.Router()

const PublicationController = require("../controllers/PublicationController")

router.get("/publication",PublicationController.showPublication)

module.exports = router