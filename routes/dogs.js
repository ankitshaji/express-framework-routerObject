//user created module file - can contain functionObjects,variable,classObjects etc which we can export

// ********************************************************************************
//mini - RESTful webApi - using REST principles
// ********************************************************************************
const express = require("express"); //functionObject //express module
const router = express.Router(); //functionObject.method() //routerObject

// *****************************************************************************************
//mini - RESTful webApi crud operations pattern (route/pattern matching algorithm - order matters)
// *****************************************************************************************
//isolated instance of middlwareCallbacks and routes

//*******************
//DOGS ROUTES
//*******************

//route1
router.get("/", (req, res) => {
  res.send("Viewing All dogs");
});

//route2
router.get("/:id", (req, res) => {
  res.send("Viewing one dog");
});

//route3
router.post("/", (req, res) => {
  res.send("Creating dog");
});

//route4
router.get("/:id/edit", (req, res) => {
  res.send("Editing a dog");
});

//route5
router.put("/:id", (req, res) => {
  res.send("Updating a dog");
});

//exportsObject = routerObject
module.exports = router;
