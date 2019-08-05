const express = require('express');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(serveStatic(__dirname + "/dist"));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});