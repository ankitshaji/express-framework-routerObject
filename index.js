//main file of this app that gets other npm package modules or user created modules
// ********************************************************************************
//RESTful webApi - using REST principles
// ********************************************************************************
const express = require("express"); //expressFunctionObject //express module
const app = express(); //appObject
const sheltersRoutes = require("./routes/shelters"); //routerObject //self created module/file needs "./"
const dogsRoutes = require("./routes/dogs"); //routerObject //self created module/file needs "./"
// *****************************************************************************************
//RESTful webApi crud operations pattern (route/pattern matching algorithm - order matters)
// *****************************************************************************************

//************************************************************************************************************
//Grouping diffrent sets of routes using custom routerObject - combining them to main application (appObject)
//************************************************************************************************************

//Recap -
//app.use(middlewareCallback) lets us execute middlewareCallback on any http method/every (http structured) request to any path
//app.use("pathString"-ie /resource,middlewareCallback) //app.use() lets us execute middlewareCallback on any http method/every (http structured) request to specific path/resource

//*******************
//SHELTERS ROUTES
//*******************
//appObject.method("path prefix",custom routerObject)
//path prefix to prevent code duplication + efficient way to change /resource
app.use("/shelters", sheltersRoutes);

//*******************
//DOGS ROUTES
//*******************
//appObject.method("path prefix",custom routerObject)
//path prefix to prevent code duplication + efficient way to change /resource
app.use("/dogs", dogsRoutes);

//address - localhost:3000
//appObject.method(port,callback) binds app to port
//execute callback when appObject start listening for (http structured) requests at port
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
