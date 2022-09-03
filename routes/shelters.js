//user created module file - can contain functionObjects,variable,classObjects etc which we can export

// ********************************************************************************
//mini - RESTful webApi - using REST principles
// ********************************************************************************
const express = require("express"); //functionObject //express module
const router = express.Router(); //functionObject.method() //routerObject

// *****************************************************************************************
//mini - RESTful webApi crud operations pattern (route/pattern matching algorithm - order matters)
// *****************************************************************************************

//*******************
//SHELTERS ROUTES
//*******************

//route1
router.get("/", (req, res) => {
  res.send("Viewing All shelters");
});

//route2
router.get("/:id", (req, res) => {
  res.send("Viewing one shelter");
});

//route3
router.post("/", (req, res) => {
  res.send("Creating shelter");
});

//route4
router.get("/:id/edit", (req, res) => {
  res.send("Editing a shelter");
});

//route5
router.put("/:id", (req, res) => {
  res.send("Updating a shelter");
});

//exportsObject = routerObject
module.exports = router;
