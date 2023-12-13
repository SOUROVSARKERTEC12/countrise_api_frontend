import axios from "axios";

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
});

export const api = {
    getCountries: async () => {
        let response = await http.get('/all');
        // console.log(response.data)
        return response.data;
    },
    getCountry: async (name) => {
        let response = await http.get(`/name/${name}?fullText=true`);
        return response.data;
    }
};
