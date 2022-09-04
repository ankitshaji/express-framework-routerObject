//user created module file - can contain functionObjects,variable,classObjects etc which we can export

// ********************************************************************************
//mini - RESTful webApi - using REST principles
// ********************************************************************************
//isolated instance of middlwareCallbacks and routes

const express = require("express"); //functionObject //express module
const router = express.Router(); //functionObject.method() //routerObject

// *****************************************************************************************
//RESTful webApi crud operations pattern (route/pattern matching algorithm - order matters)
// *****************************************************************************************

//*******************
//SHELTERS ROUTES
//*******************

//route1
//httpMethod=GET,path/resource- prefixedPath/ -(direct match/exact path)
//(READ) name-index,purpose-display all documents in collection from db
//router.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) GET request arrives at path prefixedPath/
//arguments passed in to handlerMiddlewareCallback -
//-if not already converted convert (http structured) request to req jsObject
//-if not already created create res jsObject
//-nextCallback
//async(ie continues running outside code if it hits an await inside) handlerMiddlwareCallback implicit returns promiseObject(resolved,undefined) - can await a promiseObject inside
//async function expression without an await is just a normal syncronous function expression
router.get("/", (req, res) => {
  res.send("Viewing All shelters");
});

//route2
//httpMethod=GET,path/resource-prefixedPath/:id  -(pattern match) //:id is a path variable
//(READ) name-show,purpose-display single specific document in collection of db
//app.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) GET request arrives at path prefixedPath/:id
//arguments passed in to handlerMiddlewareCallback -
//-if not already converted convert (http structured) request to req jsObject
//-if not already created create res jsObject
//-nextCallback
//async(ie continues running outside code if it hits an await inside) handlerMiddlwareCallback implicit returns promiseObject(resolved,undefined) - can await a promiseObject inside
//async function expression without an await is just a normal syncronous function expression
router.get("/:id", (req, res) => {
  res.send("Viewing one shelter");
});

//route3
//httpMethod=POST,path/resource-prefixedPath/  -(direct match/exact path)
//(CREATE) name-create,purpose-create new document in collection of db
//app.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) POST request arrives at path prefixedPath/
//arguments passed in to handlerMiddlewareCallback -
//-already converted (http structured) request to req jsObject - (http structured) request body contained form data,previous middlewareCallback parsed it to req.body
//-if not already created create res jsObject
//-nextCallback
//async(ie continues running outside code if it hits an await inside) handlerMiddlwareCallback implicit returns promiseObject(resolved,undefined) - can await a promiseObject inside
//async function expression without an await is just a normal syncronous function expression
router.post("/", (req, res) => {
  res.send("Creating shelter");
});

//route4
//httpMethod=GET,path/resource-prexiedPath/:id/edit  -(pattern match) //:id is a path variable
//(READ) name-edit,purpose-display form to edit existing document in collection of db
//app.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) GET request arrives at path prexiedPath/:id/edit
//arguments passed in to handlerMiddlewareCallback -
//-if not already converted convert (http structured) request to req jsObject
//-if not already created create res jsObject
router.get("/:id/edit", (req, res) => {
  res.send("Editing a shelter");
});

//route5
//httpMethod=PUT,path/resource-prefixedPath/:id  -(pattern match) //:id is a path variable
//(UPDATE) name-update,purpose-completely replace/update single specific existing document in collection of db
//app.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) PUT request arrives at path prefixedPath/:id
//arguments passed in to handlerMiddlewareCallback -
//-already converted (http structured) request to req jsObject
//ie.(http structured) request body contained form data,the before previous middlewareCallback parsed it to req.body then called next middlewareCallback
//that middlewareCallback ie.previous sets req.method from POST to PUT and called nextCallback
//-if not already created create res jsObject
//-nextCallback
//async(ie continues running outside code if it hits an await inside) handlerMiddlwareCallback implicit returns promiseObject(resolved,undefined) - can await a promiseObject inside
//async function expression without an await is just a normal syncronous function expression
router.put("/:id", (req, res) => {
  res.send("Updating a shelter");
});

//exportsObject = routerObject
module.exports = router;
