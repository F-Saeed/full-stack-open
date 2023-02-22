const express = require('express');
const app = express();

app.use(express.json());

let phonebook = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/info', (request, response) => {
  const date = new Date();
  const time = date.toGMTString();
  response.send(
    `<h3>Phonebook has info of ${phonebook.length} people</h3><p>${time}</p>`
  );
});

app.get('/api/persons', (request, response) => {
  response.json(phonebook);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const phoneBookNumber = phonebook.find(
    (phoneBookNumber) => phoneBookNumber.id === id
  );

  if (phoneBookNumber) {
    response.json(phoneBookNumber);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  phonebook = phonebook.filter((phoneBookNumber) => phoneBookNumber.id !== id);

  console.log(phonebook);

  response.status(204).end();
});

app.post('/api/persons', (request, response) => {
  const generateID = () => Math.floor(Math.random() * 100000);

  const body = request.body;

  if (body.length === 0) {
    return response.status(400).json({
      error: 'content missing',
    });
  } else if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({
      error: 'Name or Number is missing',
    });
  }

  if (
    phonebook.find(
      (person) => person.name.toLowerCase() === body.name.toLowerCase()
    )
  ) {
    return response.status(400).json({
      error: 'Name must be unique',
    });
  }

  const person = {
    id: generateID(),
    name: body.name,
    number: body.number,
  };

  phonebook = phonebook.concat(person);

  response.json(person);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
