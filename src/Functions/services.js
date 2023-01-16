import axios from 'axios';

const baseURL = 'http://localhost:3000/persons';

const getAllItems = async () => {
  const request = axios.get(baseURL);
  return await request.then((resp) => resp.data);
};

const createItem = async (newObject) => {
  const request = axios.post(baseURL, newObject);
  return await request.then((resp) => resp.data);
};

const updateItem = async (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return await request.then((resp) => resp.data);
};

const deleteItem = async (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return await request.then((resp) => resp.data);
};

export default {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
