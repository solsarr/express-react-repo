// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()

// mongoose connection
require("./config/db.connection.js");

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "people index route"})
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "people create route"})
});

// PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
	res.status(200).json({message: "people show route: " + req.params.id })
});

// PEOPLE DELETE ROUTE
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "people delete route: " + req.params.id })
});

// PEOPLE UPDATE ROUTE
router.put("/:id", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "people update route: " + req.params.id })
});


module.exports = router
