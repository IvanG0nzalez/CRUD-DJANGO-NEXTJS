"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import { get } from "@/hooks/Connection";
import MovieCard from "./movieCard";


const Movies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response_movies = await get("movies/");
            setMovies(response_movies);
            setIsLoading(false);
        };

        if (typeof window !== "undefined") {
            fetchData();
        }
    }, []);

    if (isLoading) {
        return LoadingScreen();
    }

    return (
        <div className="container">
            <h1>MOVIES</h1>
            <div className="movie-list">
                {movies.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
            </div>
            <style jsx>{`
                .movie-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: left;
                }

                h1 {
                    text-align: center;
                    margin-top: 1rem;
                }
            `}</style>
        </div>
    );
}

export default Movies;