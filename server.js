const express = require('express');
// const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.use(require('./bd/connection'));
app.use( require('./routes/data'));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server online on port: ${ port }`);
});