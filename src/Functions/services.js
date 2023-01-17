import axios from 'axios';

const baseURL = 'http://localhost:3000/persons';

const getAllItems = () => {
  const request = axios.get(baseURL);
  return request.then((resp) => resp.data);
};

const createItem = (newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((resp) => resp.data);
};

const updateItem = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((resp) => resp.data);
};

const deleteItem = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((resp) => resp.data);
};

export default {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
