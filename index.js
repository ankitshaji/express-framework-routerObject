//main file that gets passed in other npm package modules or user created modules
const express = require("express"); //expressFunctionObject //express module
const app = express(); //appObject
// ********************************************************************************
//main express application/appObject - RESTful webApi - using REST principles
// ********************************************************************************
const sheltersRoutes = require("./routes/shelters"); //routerObject //self created module/file needs "./"
const dogsRoutes = require("./routes/dogs"); //routerObject //self created module/file needs "./"
const adminsRoutes = require("./routes/admin"); //routerObject //self created module/file needs "./"

// ***********************************************************************************************
//Using RESTful webApi crud operations pattern (route/pattern matching algorithm - order matters)
// ***********************************************************************************************

//********************************************************************************************************************
//Grouping diffrent sets of routes using custom routerObject - combining them to main express application (appObject)
//********************************************************************************************************************
//combining min express application/routerObject to main express application/appObject

// ***********************************************
//(custom) middleware(hook) function expressions
// ***********************************************
//(Application-level middleware) - bind middlewareCallback to appObject with app.use() or app.method()
//case 1  - app.use(middlewareCallback) lets us execute middlewareCallback on any http method/every (http structured) request to any path
//case 2 - app.use("pathString"-ie /resource,middlewareCallback) lets us execute middlewareCallback on any http method/every (http structured) request to specific path/resource
//Bad approach - case 1
// app.use((req, res, next) => {
//   //checking if queryStringObject.property exists
//   if (req.query.isAdmin) {
//     return next(); //allows it pass to nextMiddlwareCallback and not run rest of code
//   }
//   // if next not returned  - causes response twice error
//   //"Cannot set headers after they are sent to the client" error - triggering a response in the same route twice
//   res.send("specific ?queryString missing - you do not have access all these routes"); //end req-res cycle
// });
//problem with this approach is that it now applies to all routes
//solutions to execute middlewareCallback on only specfic route(ie specific method and specific path) OR specfic set of routes
//-  place custom middlewareCallback in a variable and pass it as argument into specific app.method()
//-  use the route.use(middlewareCallback) to execute middlewareCallback on specfic set of routes ie routes of routerObject

//*******************
//ADMINS ROUTES
//*******************
//appObject.method("path prefix",custom routerObject)
//path prefix to prevent code duplication + efficient way to change /resource
app.use("/admins", adminsRoutes);

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
