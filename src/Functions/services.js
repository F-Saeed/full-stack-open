import axios from 'axios';

const baseURL = 'http://localhost:3000/persons';

const getAll = async () => {
  const request = axios.get(baseURL);
  return await request.then((resp) => resp.data);
};

const create = async (newObject) => {
  const request = axios.post(baseURL, newObject);
  return await request.then((resp) => resp.data);
};

const update = async (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return await request.then((resp) => resp.data);
};

export default {
  getAll,
  create,
  update,
};
