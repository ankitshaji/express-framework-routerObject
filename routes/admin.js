//user created module file - can contain functionObjects,variable,classObjects etc which we can export

// ********************************************************************************
//mini express appliation/routerObject - RESTful webApi - using REST principles
// ********************************************************************************
//routerObject is an isolated instance of middlwareCallbacks and routes - (mini express application/routerObject)
//routerObject behaves like a middlewareCallback
const express = require("express"); //functionObject //express module
const router = express.Router(); //functionObject.method() //routerObject

// ***********************************************
//(custom) middleware(hook) function expressions
// ***********************************************
//(Application-level middleware) - bind middlewareCallback to appObject with app.use() or app.method()
//case 1  - app.use(middlewareCallback) lets us execute middlewareCallback on any http method/every (http structured) request to any path
//case 2 - app.use("pathString"-ie /resource,middlewareCallback) lets us execute middlewareCallback on any http method/every (http structured) request to specific path/resource

//case1
//run middlewareCallback on only specfic set of routes ie routes of routerObject
router.use((req, res, next) => {
  //checking if queryStringObject.property is present
  if (req.query.isAdmin) {
    return next(); //allows it pass to nextMiddlwareCallback and not run rest of code
  }
  //if next not returned  - causes response twice error
  // "Cannot set headers after they are sent to the client" error - triggering a response in the same route twice
  res.send(
    "specific ?queryString missing - you do not have access to admins routes"
  ); //end req-res cycle
});

// *****************************************************************************************
//Using RESTful webApi crud operations pattern (route/pattern matching algorithm - order matters)
// *****************************************************************************************

//*******************
//ADMINS ROUTES
//*******************

//route1
//httpMethod=GET,path/resource- prefixedPath/secretone - can contain ?queryString -(direct match/exact path)
//(READ) name-index,purpose-display all documents in collection from db
//router.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) GET request arrives at path prefixedPath/secretone
//arguments passed in to handlerMiddlewareCallback -
//-if not already converted convert (http structured) request to req jsObject
//-if not already created create res jsObject
//-nextCallback
//async(ie continues running outside code if it hits an await inside) handlerMiddlwareCallback implicit returns promiseObject(resolved,undefined) - can await a promiseObject inside
//async function expression without an await is just a normal syncronous function expression
router.get("/secretone", (req, res) => {
  res.send(
    "Route accessed - Required a queryString to get access to this route"
  );
});

//route2
//httpMethod=GET,path/resource- prefixedPath/secrettwo  - can contain ?queryString -(direct match/exact path)
//(READ) name-index,purpose-display all documents in collection from db
//router.method(pathString ,async handlerMiddlewareCallback) lets us execute handlerMiddlewareCallback on specifid http method/every (http structured) request to specified path/resource
//execute handlerMiddlwareCallback if (http structured) GET request arrives at path prefixedPath/secrettwo
//arguments passed in to handlerMiddlewareCallback -
//-if not already converted convert (http structured) request to req jsObject
//-if not already created create res jsObject
//-nextCallback
//async(ie continues running outside code if it hits an await inside) handlerMiddlwareCallback implicit returns promiseObject(resolved,undefined) - can await a promiseObject inside
//async function expression without an await is just a normal syncronous function expression
router.get("/secrettwo", (req, res) => {
  res.send(
    "Route accessed - Required a queryString to get access to this route"
  );
});

//exportsObject = routerObject
module.exports = router;
