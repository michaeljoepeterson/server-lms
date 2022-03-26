const express = require('express');
const { cors } = require('./middleware/cors');

const app = express();

let port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors);

app.get('/test',(req,res) => {
    console.log('test');
    return res.json({
        test:'hi'
    });
});

app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});