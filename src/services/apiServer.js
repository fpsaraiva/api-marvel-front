import axios from 'axios';

const apiServer = axios.create({
  baseURL: 'http://localhost:3337',
});

export default apiServer;
