const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let people = {people: 
		[	{name: 'Ross', age: 31},
			{name: 'Joey', age: 32},
			{name: 'Chandler', age: 33},
			{name: 'Rachel', age: 31},
			{name: 'Monica', age: 32},
			{name: 'Phoebe', age: 33}]}

app.get('/people', function (req, res) {
	res.json(people);
});

app.post('/people', function (req, res) {
	if (req.body && req.body.name && req.body.age)
	{
		let entry = {name: req.body.name, age: Number(req.body.age) };
		people.people.push(entry);
	}
	res.json(people);
});

app.listen(port, function () {
	console.log('App listening on port ' + port + '!');
});
