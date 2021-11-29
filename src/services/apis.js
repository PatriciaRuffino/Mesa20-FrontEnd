import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brasilapi.com.br/api/cep/v1/'
});

const api2 = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

const api3 = axios.create({
    baseURL: 'https://brasilapi.com.br/api/ddd/v1/'
});

const apis = [api, api2, api3]

export default apis;