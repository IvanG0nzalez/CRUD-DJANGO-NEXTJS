"use client";

import LoadingScreen from "@/components/loadingScreen";
import { get } from "@/hooks/Connection";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SeeMovie() {
    const router = useRouter();
    const { external_id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response_movie = await get(`movies/${external_id}/`);
            setMovie(response_movie);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    if (isLoading) {
        return LoadingScreen();
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body p-5 text-center">
                            <h2 className="mb-4">Movie Details</h2>
                            <div className="detail-item mb-4">
                                <label className="form-label">Title:</label>
                                <p className="form-control">{movie.title}</p>
                            </div>

                            <div className="detail-item mb-4">
                                <label className="form-label">Release Date:</label>
                                <p className="form-control">{movie.release_date}</p>
                            </div>

                            <div className="detail-item mb-4">
                                <label className="form-label">Duration:</label>
                                <p className="form-control">{movie.duration} minutes</p>
                            </div>

                            <div className="detail-item mb-4">
                                <label className="form-label">Rating:</label>
                                <p className="form-control">{movie.rating}</p>
                            </div>

                            <div className="detail-item mb-4">
                                <label className="form-label">Genre(s):</label>
                                <div className="genres">
                                    {movie.genre_list.map((genre) => (
                                        <span key={genre.external_id} className="genre-badge">{genre.name}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Director(s):</label>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date of Birth</th>
                                            <th>Nationality</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movie.director_list.map((director) => (
                                            <tr key={director.external_id}>
                                                <td>{director.names} {director.last_names}</td>
                                                <td>{director.date_of_birth}</td>
                                                <td>{director.nationality}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success" onClick={() => router.back()}>
                                    Volver
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .detail-item {
                    display: flex;
                    align-items: center;
                }
                .detail-item .form-label {
                    margin-right: 10px;
                    min-width: 95px;
                    text-align: right;
                }
                .detail-item .form-control {
                    flex: 1;
                    display: inline-block;
                    margin: 0;
                }

                .genre-badge {
                    display: inline-block;
                    background-color: #ffebcc;
                    color: #000;
                    padding: 5px 10px;
                    border-radius: 5px;
                    margin: 5px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                    text-align: center;
                }
                td {
                    text-align: center;
                }
            `}</style>
        </div>
    );
}