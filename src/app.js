const express = require("express");
const getZoos = require("./utils/getZoos");
const validateZip = require("./middleware/validateZip");
const app = express();



app.get("/zoos/all",(req,res) => { 
  const { admin } = req.query 
  console.log({admin}) 
  if (admin === "true"){ 
    res.send(`All zoos: ${getZoos().join("; ")}`) } 
  res.send("You do not have access to that route.") })

//2 

app.get("/check/:zip", validateZip, (req, res, next) => {
  // you need to do here
   const zip = req.params.zip;
  const message = getZoos(zip)
    ? `${zip} exists in our records.`
    : `${zip} does not exist in our records.`;
  res.send(message);
});


//3.

app.get("/zoos/:zip", validateZip, (req,res) =>{ 
  const zip = req.params.zip 
  const zoos = getZoos(zip) 
  if (zoos && zoos.length){ 
    res.send(
`${zip} zoos: ${zoos.join("; ")}`
            ) } 
  res.send(`${zip} has no zoos.`) 
})

  // 4. for a path that does not exist- Error handling
app.use((req, res, next) => {
  res.send(`That route could not be found!`);
});

// 5. for a specific error
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
