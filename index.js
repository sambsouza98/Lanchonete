const express = require('express');
const app = express();
const routes = require('./routes');
app.use(require('cors')());
const bodyParser = require('body-parser');
routes(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(8080, () => {
    console.log("Server Listen");
});