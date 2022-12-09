import React, { useState, useEffect, createContext } from "react";
import { getTrendingOfWeek } from '../services/api';

export const MovieContext = createContext({});
export default function MovieProvider({ children }) {
    const [trendingMovie, setTrendingMovie] = useState({});
    useEffect(() => {
        async function handleTrendingOfWeek() {
            const response = await getTrendingOfWeek();
            const index = parseInt(Math.random() * response.length)
            setTrendingMovie(response[index]);
        }
        handleTrendingOfWeek();
    },[])
    return (
        <MovieContext.Provider value={{trendingMovie}}>
            {children}
        </MovieContext.Provider>
    );
}