const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

// this is my change to the code


app.listen(port, () => console.log(`Example app listening on port ${port}!`));