import { useRouter } from "next/navigation";


const MovieCard = ({ movie }) => {
    const router = useRouter();

    const handleSeeClick = (external_id) => {
        router.push(`/movies/${external_id}`)
    };

    const handleDeleteClick = () => {

    };

    const handleModifyClick = () => {

    };

    return (
        <div>
            <div className="movie-card">
                <div className="movie-header">
                    <h3>{movie.title}</h3>
                </div>
                <div className="separator"></div>
                <p><strong>Release date:</strong> {movie.release_date}</p>
                <p><strong>Duration:</strong> {movie.duration} minutes</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <div className="separator"></div>
                <div className="buttons">
                    <button className="btn btn-primary" onClick={() => handleSeeClick(movie.external_id)}>See</button>
                    <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
                    <button className="btn btn-warning" onClick={handleModifyClick}>Modify</button>
                </div>
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
					min-height: 220px;
					width: 310px;
					justify-content: space-between; 
					align-items: left;
				}

				.movie-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

                .separator {
					border-bottom: 1px solid #aaa;
					margin-bottom: 10px;
				}

                .buttons {
                    display: flex;
                    justify-content: space-between;
                }

                .btn-see {
                    background-color: #007bff;
                    color: white;
                }

                .btn-delete {
                    background-color: #dc3545;
                    color: white;
                }

                .btn-modify {
                    background-color: #ffc107;
                    color: #212529;
                    border-radius: 5px;
                    border: none;
                    padding: 5px;
                }

            `}</style>
        </div>
    );
}

export default MovieCard;