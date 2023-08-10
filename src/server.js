/* NODE JS */
// const http = require('http')

// const port = 3500
// const hostname = '127.0.0.1'

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('content-type', 'application/json')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server is listening at https://${hostname}:${port}`)
// })

/* EXPRESS */
const express = require('express');
require('dotenv').config();
const configViewEngine = require("./config/viewEngine.js");
const Webrouter = require('./routes/web')

const app = express();
const port = 3500;
const hostname = 'localhost';


// config template engine, config static file 
configViewEngine(app)


// Khai bao routes
app.use('/' ,Webrouter )


app.listen(port,hostname, () => {
    console.log("Running server on " + hostname + " at " + port);
})
