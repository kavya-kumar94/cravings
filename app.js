const express = require("express");
const app = express();

mongodb://admin:QuIwYeYOO4s7BExg@merncluster-5j2iu.mongodb.net / test ? retryWrites = true & w=majority

app.get("/", (req, res) => {
    res.send("Hello Kavya");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});