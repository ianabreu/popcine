import React, { useState, useEffect, createContext } from "react";
import { getTrendingOfWeek, HomeData, getUniqueTv, getUniqueMovie } from '../services/api';


export const MovieContext = createContext({});
export default function MovieProvider({ children }) {
    const [trendingMovie, setTrendingMovie] = useState({});
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function handleTrendingOfWeek() {
            const response = await getTrendingOfWeek();
            const index = parseInt(Math.random() * response.length)
            setTrendingMovie(response[index]);
        }
        handleTrendingOfWeek();
    },[])

    useEffect(() => {
        async function loadMovies() {
            const response = await HomeData();
            setMovies(response);
          }
          loadMovies();
    }, [])

    async function getTvData(id) {
        const response = await getUniqueTv(id);
        return response;
    }
    async function getMovieData(id) {
        const response = await getUniqueMovie(id);
        return response;
    }


    return (
        <MovieContext.Provider value={{trendingMovie, movies, getTvData, getMovieData}}>
            {children}
        </MovieContext.Provider>
    );
}