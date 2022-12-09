import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API = '556c8f56393b28d3b8de0f0ca7e1a4d1';
const LANG = 'pt-br';

export const api = axios.create({
    baseURL: BASE_URL
});


// async function apiGet(endpoint) {
//     const response = await api.get(endpoint)
//     let data = response.data;
//     return data;
// }

export async function getTrendingOfWeek() {
    const res = await api.get(`/trending/all/week?api_key=${API}&language=${LANG}`)
    const data = res.data.results;
    return data;
}