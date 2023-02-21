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

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing',
    });
  }

  const person = {
    id: generateID(),
    name: body.content.name,
    number: body.content.number,
  };

  phonebook.concat(person);

  response.json(person);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
