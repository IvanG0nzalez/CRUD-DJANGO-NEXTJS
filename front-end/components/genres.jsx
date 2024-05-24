"use client";

import { get, update } from "@/hooks/Connection";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import { confirmDelete, messages } from "./Messages";
import { useRouter } from "next/navigation";

const Genres = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [genres, setgenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response_genres = await get("genres/");
            setgenres(response_genres);
            setIsLoading(false);
        };
        if (typeof window !== "undefined") {
            fetchData();
        }
    }, []);

    const handleDeleteDirector = async (external_id) => {
        confirmDelete(async () => {
            await update(`genres/${external_id}/`, { state: false });
            const response_g = await get("genres/");
            setgenres(response_g);
        });
    };

    const handleModifyGenre = async (external_id) => {
        router.push(`/genres/modify/${external_id}`);
    };

    const hanldeAddGenre = () => {
        router.push("/genres/add");
    };

    if (isLoading) {
        return LoadingScreen();
    }

    return (
        <div className="table-container">
            <div className="header">
                <h1>Registered Genres</h1>
                <button className="btn btn-success" onClick={hanldeAddGenre}>New Genre</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {genres.length > 0 ? (
                        genres.map((genre, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{genre.name}</td>
                                <td>
                                    <div className="actions">
                                        <button className="btn btn-primary" onClick={() => handleModifyGenre(genre.external_id)}>Modify</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteDirector(genre.external_id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">There are no genres registered yet, start adding them by pressing the buttom above.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <style jsx>{`
                .header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    gap: 40px;
                }
                
				.table-container {
					overflow-x: auto;
					width: 50%;
					margin: 20px auto;
					padding: 20px;
				}

				table {
					max-width: 100%;
					border-collapse: collapse;
					margin-top: 20px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					border-radius: 8px;
					overflow: hidden;
					background-color: #fff;
				}

				th,
				td {
					border: 1px solid #ddd;
					padding: 8px;
					text-align: center;
					vertical-align: middle;
				}

				th {
					background-color: #f2f2f2;
				}

				.btn {
					margin-right: 10px;
				}

				.center-h1 {
					text-align: center;
					margin-bottom: 20px;
				}

				.actions {
					display: flex;
					justify-content: center;
				}

				@media (max-width: 768px) {
					.table-container {
						width: 100%;
						padding: 10px;
					}
				}

				@media (max-width: 1024px) {
					.table-container {
					  width: 80%;
					  padding: 10px;
					}
			  	}
			`}</style>
        </div>
    );
}

export default Genres;