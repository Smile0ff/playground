import axios from 'axios';

const endpoint = 'https://swapi.co/api/people/';

export const getCharacters = () => {    
    return axios.get(endpoint);
}