"use client";

import { get, update } from "@/hooks/Connection";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import { confirmDelete, messages } from "./Messages";
import { useRouter } from "next/navigation";

const Directors = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response_directors = await get("directors/");
            setDirectors(response_directors);
            setIsLoading(false);
        };
        if (typeof window !== "undefined") {
            fetchData();
        }
    }, []);

    const handleDeleteDirector = async (external_id) => {
        confirmDelete(async () => {
            await update(`directors/${external_id}/`, { state: false });
            const response_d = await get("directors/");
            setDirectors(response_d);
        });
    };

    const handleModifyDirector = async (external_id) => {
        router.push(`/directors/modify/${external_id}`);
    };

    const hanldeAddDirector = () => {
        router.push("/directors/add");
    };

    if (isLoading) {
        return LoadingScreen();
    }

    return (
        <div className="table-container">
            <div className="header">
                <h1>Registered Directors</h1>
                <button className="btn btn-success" onClick={hanldeAddDirector}>New Director</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Names</th>
                        <th>Last names</th>
                        <th>Date of Birth</th>
                        <th>Nationality</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {directors.length > 0 ? (
                        directors.map((director, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{director.names}</td>
                                <td>{director.last_names}</td>
                                <td>{director.date_of_birth}</td>
                                <td>{director.nationality}</td>
                                <td>
                                    <div className="actions">
                                        <button className="btn btn-primary" onClick={() => handleModifyDirector(director.external_id)}>Modify</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteDirector(director.external_id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">There are no directors registered yet.</td>
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

					.actions {
						flex-direction: column;
						align-items: center;
					}

					.btn {
						margin-top: 3px;
						margin-right: 0px;
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

export default Directors;