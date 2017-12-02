var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// mock data structure for temperatures
var temps = [
    {name: 'Unit A', actual: '79.7', min: '60', max: '90'},
    {name: 'Unit B', actual: '72.4', min: '60', max: '90'},
    {name: 'Unit C', actual: '77.8', min: '60', max: '90'}
];

// use body-parser middleware
app.use(bodyParser.json());

// create custom core middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
})

// init api for routes
var api = express.Router();

// route for GET temperature data
api.get('/temps', (req, res) => res.json(temps));

// route for POST temperature data 
api.post('/temps', (req, res) => {
    // console.log(req.body);
    temps.push(req.body); // trace: temps array > temperature.component.ts
    res.sendStatus(200);
});

app.use('/api', api);

// activate middleware server on port 3000
app.listen(3000, () => console.log('Backend Node Server running on port 3000!'));