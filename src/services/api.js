import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-list-api-vibbra.herokuapp.com',
});

export { api };
