import React, { useState, useEffect, createContext } from "react";
import { getTrendingOfWeek, HomeData } from '../services/api';


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



    return (
        <MovieContext.Provider value={{trendingMovie, movies}}>
            {children}
        </MovieContext.Provider>
    );
}