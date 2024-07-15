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
                {movies.length > 0 ? (
                    movies.map((movie, i) => (
                        <MovieCard key={i} movie={movie} onDelete={handleDelete} />
                    ))
                ) : (
                    <div className="movie-card">
                        <div className="movie-header">
                            <h4>There&apos;s no movies yet.</h4>
                        </div>
                        <div className="separator"></div>
                        <p>You can start adding movies by pressing the &quot;New Movie&quot; button.</p>
                        <div className="separator"></div>
                    </div>
                )}

            </div>
            <style jsx>{`
                .movie-card {
					display: flex;
					flex-direction: column;
					padding: 20px;
					margin: 15px 15px;
					border: 1px solid #6b9cc1;
					border-radius: 10px;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					background-color: #cfe2f3;
					transition: transform 0.3s, box-shadow 0.3s;
					min-height: 230px;
					width: 360px;
					justify-content: space-between; 
					align-items: left;
				}

				.movie-header {
					display: flex;
					justify-content: center;
					align-items: center;
				}

                .separator {
					border-bottom: 1px solid #aaa;
					margin-bottom: 10px;
				}

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