import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API = '556c8f56393b28d3b8de0f0ca7e1a4d1';
const LANG = 'pt-br';

export const api = axios.create({
    baseURL: BASE_URL
});


async function apiGet(endpoint) {
    const response = await api.get(endpoint)
    const data = response.data.results;
    return data;
}

export async function getTrendingOfWeek() {
    try {
        const res = await api.get(`/trending/movie/week?language=${LANG}&api_key=${API}`)
        const data = await res.data.results;
        return data;
    } catch (error) {
        console.log('getTrendingOfWeek ' + error);
    }
}

export async function HomeData() {
    return [
        {
            id: '1',
            slug: 'trending',
            title: 'Recomendados para você',
            items: await apiGet(`/trending/all/week?language=${LANG}&api_key=${API}`)
        },
        {
            id: '2',
            slug: 'toprated',
            title: 'Em Alta',
            items: await apiGet(`/movie/top_rated?language=${LANG}&api_key=${API}`)
        },
        {
            id: '3',
            slug: 'action',
            title: 'Ação',
            items: await apiGet(`/discover/movie?with_genres=28&language=${LANG}&api_key=${API}`)
        },
       {
            id: '4',
            slug: 'comedy',
            title: 'Comédia',
            items: await apiGet(`/discover/movie?with_genres=35&language=${LANG}&api_key=${API}`)
        },
        {
            id: '5',
            slug: 'horror',
            title: 'Terror',
            items: await apiGet(`/discover/movie?with_genres=27&language=${LANG}&api_key=${API}`)
        },
        {
            id: '6',
            slug: 'romance',
            title: 'Romance',
            items: await apiGet(`/discover/movie?with_genres=10749&language=${LANG}&api_key=${API}`)
        },
        {
            id: '7',
            slug: 'documentary',
            title: 'Documentários',
            items: await apiGet(`/discover/movie?with_genres=99&language=${LANG}&api_key=${API}`)
        },
    ];
}