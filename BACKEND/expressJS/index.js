const express = require("express");
const app = express();

let port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// Home Route
app.get("/", (req, res) => {
    console.log("Hello, I am root");
    res.send("Welcome to the Home Page");
});

// // Apple Route
// app.get("/apple", (req, res) => {
//     console.log("You contacted the apple path");
//     res.send("Welcome to Apple Page 🍎");
// });

// // Orange Route
// app.get("/orange", (req, res) => {
//     console.log("You contacted the orange path");
//     res.send("Welcome to Orange Page 🍊");
// });
app.get("/:username/:id", (req, res) => {
    let { username , id} = req.params;
    let htmlstr = `<h1>welocme to the page of @${username}</h1>`;  
    res.send(htmlstr);
}); 

app.get("/search",(req,res)=>{
    let {q} = req.query ;
    res.send(`this is the result : ${q} `)
    
})