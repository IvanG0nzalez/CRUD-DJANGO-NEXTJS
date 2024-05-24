"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import { get } from "@/hooks/Connection";
import MovieCard from "./movieCard";
import { useRouter } from "next/navigation";


const Movies = () => {
    const router = useRouter();
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

    const handleDelete = (external_id) => {
        setMovies(movies.filter(movie => movie.external_id !== external_id));
    }

    const hanldeAddMovieClick = () => {
        router.push("/movies/add");
    };

    if (isLoading) {
        return LoadingScreen();
    }

    return (
        <div className="container">
            <div className="header">
                <h1>MOVIES</h1>
                <button className="btn btn-success" onClick={hanldeAddMovieClick}>New Movie</button>
            </div>
            <div className="movie-list">
                {movies.map((movie, i) => (
                    <MovieCard key={i} movie={movie} onDelete={handleDelete}/>
                ))}
            </div>
            <style jsx>{`
                .header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    gap: 40px;
                }

                .btn {
                    margin-top: 10px;
                }

                .movie-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
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